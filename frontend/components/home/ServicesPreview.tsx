
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "STRENGTH TRAINING",
    slug: "strength-training",
    description: "Build muscle, increase power and get stronger.",
    image: "/images/services/strength.jpg",
    icon: "strength",
  },
  {
    title: "CARDIO FITNESS",
    slug: "cardio-fitness",
    description: "Boost stamina, burn calories and improve heart health.",
    image: "/images/services/cardio.jpg",
    icon: "cardio",
  },
  {
    title: "PERSONAL TRAINING",
    slug: "personal-training",
    description: "One-on-one guidance tailored to your goals.",
    image: "/images/services/personal.jpg",
    icon: "personal",
  },
  {
    title: "FLEXIBILITY & MOBILITY",
    slug: "flexibility-mobility",
    description: "Improve movement, reduce injury and stay agile.",
    image: "/images/services/flexibility.jpg",
    icon: "flexibility",
  },
  {
    title: "NUTRITION PLANNING",
    slug: "nutrition-planning",
    description: "Personalized diet plans to fuel your training and results.",
    image: "/images/services/nutrition.jpg",
    icon: "nutrition",
  },
  {
    title: "GROUP CLASSES",
    slug: "group-classes",
    description: "High-energy workouts with expert guidance and a motivating crew.",
    image: "/images/services/group.jpg",
    icon: "group",
  },
];

function ServiceIcon({ type }: { type: string }) {
  const common = "h-8 w-8 md:h-9 md:w-9";

  if (type === "strength") {
    return (
      <svg viewBox="0 0 48 48" className={common} fill="currentColor">
        <path d="M4 17h5v14H4zM11 12h6v24h-6zM31 12h6v24h-6zM39 17h5v14h-5zM17 21h14v6H17z" />
      </svg>
    );
  }

  if (type === "cardio") {
    return (
      <svg viewBox="0 0 48 48" className={common} fill="currentColor">
        <path d="M24 42S5 29 5 17C5 5 20 3 24 14 28 3 43 5 43 17c0 12-19 25-19 25z" />
        <path
          d="M7 24h10l4-9 7 17 4-8h9"
          fill="none"
          stroke="#C6FF00"
          strokeWidth="3"
        />
      </svg>
    );
  }

  if (type === "personal") {
    return (
      <svg viewBox="0 0 48 48" className={common} fill="currentColor">
        <circle cx="17" cy="13" r="7" />
        <circle cx="34" cy="16" r="6" />
        <path d="M3 39v-5c0-8 6-13 14-13s14 5 14 13v5H3z" />
        <path d="M29 25c9-3 16 2 16 10v4H34v-5c0-4-2-7-5-9z" />
      </svg>
    );
  }

  if (type === "flexibility") {
    return (
      <svg viewBox="0 0 48 48" className={common} fill="currentColor">
        <path d="M24 42C11 35 5 25 10 13c8 2 13 8 14 17 1-9 6-15 14-17 5 12-1 22-14 29z" />
        <path
          d="M24 42V20"
          fill="none"
          stroke="#C6FF00"
          strokeWidth="2.5"
        />
      </svg>
    );
  }

  if (type === "nutrition") {
    return (
      <svg viewBox="0 0 48 48" className={common} fill="currentColor">
        <path d="M9 5h4v13H9zM6 5h2v8H6zM14 5h2v8h-2zM9 18h5v25H9zM30 5c-5 8-5 15 1 19v19h5V24c6-4 6-11 1-19z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className={common} fill="currentColor">
      <circle cx="17" cy="13" r="7" />
      <circle cx="34" cy="13" r="7" />
      <circle cx="25" cy="8" r="7" />
      <path d="M2 39v-6c0-6 5-10 11-10 4 0 7 2 9 5 2-3 5-5 9-5 8 0 14 5 14 12v4H2z" />
    </svg>
  );
}

export default function ServicesPreview() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F3EBDD] px-5 py-20 text-[#171717] md:px-10 md:py-24 lg:px-16"
    >
      <div className="relative mx-auto max-w-[1500px]">

        {/* Heading */}
        <div className="mb-12 grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-5">
              <span className="font-[var(--font-barlow)] text-2xl font-black italic">
                SERVICES
              </span>
              <div className="h-[2px] flex-1 bg-[#171717]" />
            </div>

            <h2 className="font-[var(--font-barlow)] text-[clamp(3rem,7vw,6.5rem)] font-black italic uppercase leading-[0.9] tracking-tight">
              WHAT WE{" "}
              <span className="inline-block -rotate-2 bg-[#C6FF00] px-3 py-1">
                OFFER.
              </span>
            </h2>
          </div>

          <div className="flex items-center justify-between gap-6 lg:pb-2 lg:pl-8">
            <p className="max-w-[350px] font-[var(--font-inter)] text-sm leading-7 md:text-base">
              A complete range of fitness services to help you build strength,
              improve endurance and achieve your goals.
            </p>

            <div className="flex shrink-0 -skew-x-12 gap-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-14 w-3 border-2 border-[#171717] bg-[#C6FF00] md:h-20 md:w-4"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              href={`/services/${service.slug}`}
              key={service.slug}
              aria-label={`Explore ${service.title}`}
              className="group relative block transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91C900]"
            >
              <article
                className="relative grid min-h-[230px] grid-cols-[43%_57%] overflow-hidden border-2 border-[#171717] bg-[#F3EBDD]"
                style={{
                  clipPath:
                    "polygon(5% 0,100% 0,100% 90%,95% 100%,0 100%,0 10%)",
                }}
              >
                {/* Image */}
                <div className="relative min-h-[230px] overflow-hidden bg-[#171717]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 45vw, 20vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-4 md:p-5">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#C6FF00] text-[#171717] md:h-16 md:w-16">
                        <ServiceIcon type={service.icon} />
                      </div>

                      <h3 className="font-[var(--font-barlow)] text-xl font-black italic uppercase leading-[0.95] md:text-2xl lg:text-[27px]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="font-[var(--font-inter)] text-xs leading-relaxed md:text-sm">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-3 flex justify-end">
                    <span className="text-4xl transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </article>

              {/* Hover accent */}
              <div className="absolute -bottom-1 left-3 -z-10 h-1 w-[90%] bg-[#C6FF00] transition-all duration-300 group-hover:h-2" />
            </Link>
          ))}
        </div>

        {/* Bottom decorative shapes */}
        <div className="pointer-events-none relative mt-10 flex h-5 justify-between">
          <div className="h-5 w-40 -skew-x-[30deg] bg-[#C6FF00] md:w-64" />
          <div className="h-5 w-48 -skew-x-[30deg] bg-[#FF503D] md:w-80" />
        </div>
      </div>
    </section>
  );
}
