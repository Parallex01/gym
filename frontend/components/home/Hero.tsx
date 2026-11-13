
import Image from "next/image";
import Link from "next/link";

const tickerItems = Array.from({ length: 8 });

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-76px)] flex-col overflow-hidden bg-[#171717] text-[#F3F0E9]">

      {/* Main Hero Content */}
      <div className="mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 items-center gap-4 px-5 pb-12 pt-8 md:px-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12 lg:py-5">

        {/* Athlete Image */}
        <div className="relative order-2 flex h-[380px] items-end justify-center md:h-[480px] lg:order-1 lg:h-full lg:min-h-0">

          {/* Background Triangle */}
          <div
            className="absolute left-[10%] top-[8%] h-[70%] w-[85%] bg-[#C6FF00]"
            style={{
              clipPath: "polygon(0 0, 100% 72%, 10% 100%)",
            }}
          />

          {/* Athlete */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/images/hero/athlete.png"
              alt="Athlete lifting a heavy barbell"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="order-1 flex flex-col justify-center lg:order-2 lg:pl-2">

          {/* Quote */}
          <div className="font-[var(--font-barlow)] text-[clamp(32px,4.1vw,66px)] font-extrabold italic leading-[1.08] tracking-tight">

            <p>
              <span className="text-[#C6FF00]">“</span>
              THE PAIN YOU FEEL
            </p>

            <p className="mt-2">
              TODAY WILL BE THE
            </p>

            <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="inline-block bg-[#C6FF00] px-3 py-0.5 text-[#171717]">
                STRENGTH
              </span>
              <span>YOU FEEL</span>
            </p>

            <p className="mt-2">
              TOMORROW.
              <span className="text-[#C6FF00]"> ”</span>
            </p>
          </div>

          {/* Quote Author */}
          <div className="mt-6 flex justify-end">
            <span className="-skew-x-6 bg-[#FF503D] px-5 py-2 font-[var(--font-barlow)] text-3xl font-extrabold italic text-[#171717] md:text-4xl">
              JIM ROHN'S
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:justify-end">

            <Link
              href="/pricing"
              className="flex -skew-x-6 items-center gap-3 border-2 border-[#FF503D] bg-[#FF503D] px-5 py-2 font-[var(--font-barlow)] text-xl font-bold text-[#171717] shadow-[4px_4px_0_#F3F0E9] transition-all hover:-translate-y-1 hover:shadow-[4px_7px_0_#F3F0E9] md:text-2xl"
            >
              <span className="skew-x-6">JOIN NOW</span>
              <span className="skew-x-6 text-3xl">↗</span>
            </Link>

            <Link
              href="/about"
              className="flex -skew-x-6 items-center gap-3 border-2 border-[#C6FF00] bg-[#C6FF00] px-5 py-2 font-[var(--font-barlow)] text-xl font-bold text-[#171717] shadow-[4px_4px_0_#F3F0E9] transition-all hover:-translate-y-1 hover:shadow-[4px_7px_0_#F3F0E9] md:text-2xl"
            >
              <span className="skew-x-6">EXPLORE</span>
              <span className="skew-x-6 text-3xl">↗</span>
            </Link>

          </div>
        </div>
      </div>

      {/* Bottom Membership Ticker */}
      <div className="flex h-10 w-full shrink-0 items-center overflow-hidden border-t-2 border-white/20 bg-[#F3F0E9] text-[#171717]">

        <div className="membership-track">
          {tickerItems.map((_, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center gap-4 px-5 font-[var(--font-barlow)] text-lg font-bold italic md:text-xl"
            >
              <span>JOIN MUSCLE MONK NOW STARTING ONLY</span>

              <span className="bg-[#FF503D] px-2 py-0.5">
                @1499/MONTH
              </span>

              <span className="text-[#C6FF00]">✦</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
