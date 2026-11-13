
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
];

const services = [
  "Strength Training",
  "Cardio Fitness",
  "Personal Training",
  "Flexibility & Mobility",
  "Nutrition Planning",
];

const socials = [
  { name: "IG", href: "#" },
  { name: "YT", href: "#" },
  { name: "FB", href: "#" },
  { name: "X", href: "#" },
];

function SocialIcon({ type }: { type: string }) {
  const common = "h-5 w-5";

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor">
        <path d="M23 7.1a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.5 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.8 5.7 22H2.5l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20Z" />
    </svg>
  );
}


export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#171717] text-[#F3EBDD]">

      {/* Compact CTA */}
      <div className="border-b border-white/20 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 md:flex-row md:items-center">

          <div>
            <h2 className="font-[var(--font-barlow)] text-4xl font-black italic leading-none sm:text-5xl">
              MUSCLE <span className="bg-[#C6FF00] px-2 text-[#171717]">MONK.</span>
            </h2>
            <p className="mt-2 text-xs tracking-[0.2em] text-white/60">
              GYM / TRAINING / NUTRITION / COMMUNITY
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <h3 className="font-[var(--font-barlow)] text-2xl font-black italic leading-tight sm:text-3xl">
              READY TO
              <br />
              GET STARTED?
            </h3>

            <Link
              href="/pricing"
              className="flex -skew-x-6 items-center gap-3 bg-[#FF503D] px-6 py-3 font-[var(--font-barlow)] text-xl font-black italic text-[#171717] shadow-[4px_4px_0_#F3EBDD] transition hover:-translate-y-1"
            >
              <span className="skew-x-6">JOIN NOW ↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="mx-auto grid max-w-[1400px] gap-9 px-6 py-9 sm:grid-cols-2 md:grid-cols-4 md:px-10">

        {/* Quick links */}
        <div>
          <h3 className="mb-4 font-[var(--font-barlow)] text-2xl font-black italic">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-sm text-white/65">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-[#C6FF00]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 font-[var(--font-barlow)] text-2xl font-black italic">
            SERVICES
          </h3>
          <ul className="space-y-2 text-sm text-white/65">
            {services.map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="transition-colors hover:text-[#C6FF00]"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-[var(--font-barlow)] text-2xl font-black italic">
            CONTACT US
          </h3>
          <div className="space-y-3 text-sm text-white/65">
            <p>⌖ &nbsp; Haldwani, Uttarakhand</p>
            <p>☎ &nbsp; +91 98765 43210</p>
            <p>✉ &nbsp; hello@musclemonk.in</p>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h3 className="mb-4 font-[var(--font-barlow)] text-2xl font-black italic">
            STAY CONNECTED
          </h3>

          <div className="flex gap-2">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center bg-[#C6FF00] text-xs font-black text-[#171717] transition hover:-translate-y-1 hover:bg-[#FF503D]"
              >
                {social.name}
              </Link>
            ))}
          </div>

          <p className="mb-2 mt-5 font-[var(--font-barlow)] text-lg font-black italic">
            TRAIN HARD. STAY UPDATED.
          </p>
          <p className="text-xs leading-5 text-white/50">
            Follow us for gym updates, fitness tips and community events.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 px-6 py-4 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© 2026 Muscle Monk. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <Link href="#" className="hover:text-[#C6FF00]">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#C6FF00]">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-[#C6FF00]">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
