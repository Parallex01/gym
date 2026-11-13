import Link from "next/link";

const plans = [
  {
    name: "BASIC",
    price: "1,499",
    description: "Build a solid foundation.",
    icon: "dumbbell",
    popular: false,
    features: [
      "Gym access (all areas)",
      "Standard equipment",
      "Locker facility",
      "Fitness assessment",
    ],
    button: "GET BASIC",
  },
  {
    name: "PRO",
    price: "2,499",
    description: "Train smarter. Get faster results.",
    icon: "crown",
    popular: true,
    features: [
      "Everything in Basic",
      "Personalized workout plan",
      "Expert trainer guidance",
      "Diet & nutrition support",
      "Group fitness classes",
    ],
    button: "GET PRO",
  },
  {
    name: "ELITE",
    price: "3,999",
    description: "The complete fitness experience.",
    icon: "medal",
    popular: false,
    features: [
      "Everything in Pro",
      "1-on-1 personal training",
      "Advanced body analysis",
      "Priority class booking",
      "Recovery & wellness support",
    ],
    button: "GET ELITE",
  },
];


function PlanIcon({ type }: { type: string }) {
  if (type === "dumbbell") {
    return (
      <svg viewBox="0 0 48 48" className="h-11 w-11" fill="currentColor">
        <path d="M4 17h5v14H4zM11 12h6v24h-6zM31 12h6v24h-6zM39 17h5v14h-5zM17 21h14v6H17z" />
      </svg>
    );
  }

  if (type === "crown") {
    return (
      <svg
        viewBox="0 0 48 48"
        className="h-11 w-11"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      >
        <path d="M6 13l10 9 8-13 8 13 10-9-5 22H11L6 13z" />
        <path d="M12 41h24" />
        <circle cx="6" cy="11" r="3" fill="currentColor" />
        <circle cx="24" cy="7" r="3" fill="currentColor" />
        <circle cx="42" cy="11" r="3" fill="currentColor" />
      </svg>
    );
  }

  // Elite medal icon
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11" fill="currentColor">
      {/* Ribbons at the top */}
      <path d="M13 4h10l4 15H17L13 4Z" />
      <path d="M25 4h10l-4 15H21l4-15Z" />

      {/* Medal */}
      <circle cx="24" cy="29" r="12" />
      <circle cx="24" cy="29" r="8" fill="#F3EBDD" />

      {/* Star */}
      <path
        d="M24 21l2.3 5h5.4l-4.2 3.4 1.6 5.2-5.1-3.1-5.1 3.1 1.6-5.2-4.2-3.4h5.4L24 21Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function PricingPreview() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#171717] px-5 py-14 text-[#F3F0E9] md:px-10 lg:px-14 lg:py-16">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#C6FF00]/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-[1500px]">

        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-6">
              <span className="font-[var(--font-barlow)] text-2xl font-black italic">
                PRICING
              </span>
              <div className="h-[2px] flex-1 bg-[#F3F0E9]/80" />
            </div>

            <h1 className="font-[var(--font-barlow)] text-[clamp(48px,7vw,90px)] font-black italic uppercase leading-[0.9] tracking-tight">
              CHOOSE YOUR{" "}
              <span className="inline-block -rotate-2 bg-[#C6FF00] px-3 text-[#171717]">
                PLAN.
              </span>
            </h1>
          </div>

          <div className="flex items-center justify-between gap-8 lg:mb-2 lg:w-[410px]">
            <p className="max-w-[270px] font-[var(--font-inter)] text-base leading-relaxed text-white/80 md:text-lg">
              Flexible membership plans for every fitness goal. Train your way, at your pace.
            </p>

            <div className="flex shrink-0 -skew-x-12 gap-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="h-[72px] w-3 bg-[#C6FF00] md:h-20 md:w-4" />
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-10 pt-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex min-h-[500px] flex-col px-6 py-7 transition-transform duration-300 hover:-translate-y-2 md:px-8 md:py-8 ${
                plan.popular
                  ? "bg-[#C6FF00] text-[#171717] shadow-[0_12px_35px_rgba(198,255,0,0.10)]"
                  : "bg-[#F3EBDD] text-[#171717]"
              }`}
              style={{
                clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
              }}
            >
              {/* Popular ribbon */}
              {plan.popular && (
                <div className="absolute -right-1 top-5 z-10 -rotate-3 bg-[#FF503D] px-6 py-2 font-[var(--font-barlow)] text-lg font-black italic text-[#171717] shadow-[3px_3px_0_#171717] md:text-xl">
                  MOST POPULAR
                </div>
              )}

              {/* Plan header */}
              <div className="flex items-center gap-4 border-b-2 border-[#171717] pb-6">
                <div
                  className={`flex h-[68px] w-[82px] shrink-0 items-center justify-center ${
                    plan.popular
                      ? "bg-[#171717] text-[#C6FF00]"
                      : "bg-[#C6FF00] text-[#171717]"
                  }`}
                >
                  <PlanIcon type={plan.icon} />
                </div>

                <div className="min-w-0">
                  <h2 className="font-[var(--font-barlow)] text-4xl font-black italic leading-none md:text-5xl">
                    {plan.name}
                  </h2>
                  <p className="mt-2 font-[var(--font-inter)] text-xs leading-relaxed md:text-sm">
                    {plan.description}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 border-b-2 border-[#171717] py-5">
                <span className="font-[var(--font-inter)] text-3xl font-bold md:text-4xl">
                  ₹
                </span>
                <span className="font-[var(--font-barlow)] text-5xl font-black italic tracking-tight md:text-6xl">
                  {plan.price}
                </span>
                <span className="font-[var(--font-barlow)] text-lg font-black italic md:text-xl">
                  / MONTH
                </span>
              </div>

              {/* Features */}
              <div className="flex-1 py-6">
                <h3 className="mb-5 font-[var(--font-barlow)] text-2xl font-black italic md:text-3xl">
                  WHAT&apos;S INCLUDED
                </h3>

                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-[var(--font-inter)] text-sm leading-relaxed md:text-base"
                    >
                      <span className="mt-0.5 shrink-0 text-xl font-black leading-none">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className={`group flex items-center justify-center gap-3 border-2 border-[#171717] px-5 py-3 font-[var(--font-barlow)] text-2xl font-black italic transition-all duration-200 hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-[#FF503D] text-[#171717] shadow-[5px_5px_0_#171717] hover:shadow-[5px_8px_0_#171717]"
                    : "bg-transparent text-[#171717] shadow-[5px_5px_0_#171717] hover:bg-[#C6FF00] hover:shadow-[5px_8px_0_#171717]"
                }`}
              >
                {plan.button}
                <span className="text-3xl transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>
          ))}

        </div>

        {/* Bottom decorative accent */}
        <div className="mt-16 flex justify-end">
          <div className="h-3 w-40 -skew-x-[35deg] bg-[#FF503D] md:w-64" />
        </div>
      </div>
    </main>
  );
}
