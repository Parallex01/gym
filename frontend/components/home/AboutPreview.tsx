
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "EXPERT TRAINERS",
    description: "Certified and experienced coaches.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="h-10 w-10">
        <path d="M5 18h5v12H5zM12 13h5v22h-5zM31 13h5v22h-5zM38 18h5v12h-5zM17 21h14v6H17z" />
      </svg>
    ),
  },
  {
    title: "PREMIUM EQUIPMENT",
    description: "World-class, well-maintained gear.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" className="h-10 w-10">
        <rect x="8" y="15" width="32" height="25" rx="2" />
        <path d="M16 15V9h16v6M8 25h32M16 32h16" />
      </svg>
    ),
  },
  {
    title: "SUPPORTIVE COMMUNITY",
    description: "Train, grow and stay motivated together.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="h-10 w-10">
        <circle cx="24" cy="13" r="8" />
        <circle cx="9" cy="19" r="6" />
        <circle cx="39" cy="19" r="6" />
        <path d="M9 43c0-9 5-15 15-15s15 6 15 15H9zM0 40c0-7 3-12 10-13 3 0 5 1 7 3-4 3-6 7-6 10H0zM37 30c2-2 4-3 7-3 7 1 10 6 10 13H37c0-4-2-7-4-10z" />
      </svg>
    ),
  },
];

const stats = [
  { number: "5+", label: "YEARS" },
  { number: "10K+", label: "MEMBERS" },
  { number: "25+", label: "TRAINERS" },
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden border-x-4 border-b-4 border-[#171717] bg-[#F3EBDD] px-5 py-16 text-[#171717] md:px-9 lg:min-h-[660px] lg:px-12 lg:py-12">

      {/* Main Layout */}
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.95fr_1.05fr_1.2fr] lg:items-center lg:gap-8">

        {/* Left: About Text */}
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-6">
            <h3 className="shrink-0 font-[var(--font-barlow)] text-2xl font-black italic">
              ABOUT US
            </h3>
            <div className="h-[2px] flex-1 bg-[#171717]" />
          </div>

          <h2 className="font-[var(--font-barlow)] text-[clamp(48px,5vw,78px)] font-black italic uppercase leading-[0.86] tracking-[-2px]">
            MORE THAN
            <br />
            A GYM.
            <br />
            <span className="mt-2 inline-block -rotate-1 bg-[#C6FF00] px-3 py-2">
              A COMMUNITY.
            </span>
          </h2>

          <p className="mt-7 max-w-[430px] font-[var(--font-inter)] text-sm leading-[1.65] md:text-base">
            Muscle Monk is a fitness space built for real people who are
            serious about getting stronger, healthier, and more confident.
            We combine expert guidance, top-class equipment and a motivating
            environment to help you reach your goals.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex -skew-x-6 items-center gap-3 border-2 border-[#171717] bg-[#C6FF00] px-9 py-3 font-[var(--font-barlow)] text-2xl font-black italic shadow-[5px_5px_0_#171717] transition-all hover:-translate-y-1 hover:shadow-[5px_8px_0_#171717]"
          >
            <span className="skew-x-6">OUR STORY</span>
            <span className="skew-x-6 text-3xl">↗</span>
          </Link>
        </div>

        {/* Center: Athlete Image */}
        <div className="relative mx-auto h-[460px] w-full max-w-[430px] lg:h-[530px]">
          {/* Lime geometric backing */}
          <div
            className="absolute inset-x-[7%] inset-y-[2%] bg-[#C6FF00]"
            style={{
              clipPath: "polygon(14% 4%, 100% 0, 82% 96%, 0 100%)",
            }}
          />

          {/* Image frame */}
          <div
            className="absolute inset-x-[3%] inset-y-[6%] overflow-hidden border-[5px] border-[#171717] bg-[#171717]"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 84% 100%, 0 100%)",
            }}
          >
            <Image
              src="/images/about/about-athlete.png"
              alt="Athlete standing in a gym after training"
              fill
              sizes="(max-width: 768px) 90vw, 35vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right: Features and Stats */}
        
{/* Right: Features and Stats */}
<div className="flex flex-col gap-8">

  {/* Feature Cards */}
  <div className="flex flex-col gap-4">
    {features.map((feature, index) => (
      <div
        key={feature.title}
        className="group relative flex min-h-[104px] items-center gap-5 border-2 border-[#171717] bg-[#F3EBDD] px-4 py-4 transition-all duration-300 hover:translate-x-1 hover:shadow-[5px_5px_0_#C6FF00]"
      >
        {/* Lime accent */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#C6FF00] transition-all duration-300 group-hover:w-full" />

        {/* Icon */}
        <div className="flex h-[68px] w-[76px] shrink-0 items-center justify-center bg-[#C6FF00] text-[#171717] transition-transform duration-300 group-hover:scale-105">
          {feature.icon}
        </div>

        {/* Content */}
        <div className="min-w-0">
          <h3 className="font-[var(--font-barlow)] text-[23px] font-black italic leading-tight tracking-tight md:text-[26px]">
            {feature.title}
          </h3>

          <p className="mt-2 font-[var(--font-inter)] text-sm leading-relaxed text-[#343434]">
            {feature.description}
          </p>
        </div>

        {/* Index */}
        <span className="ml-auto hidden self-start font-[var(--font-barlow)] text-sm font-bold text-[#171717]/35 sm:block">
          0{index + 1}
        </span>
      </div>
    ))}
  </div>

  {/* Statistics Panel */}
  <div className="relative mt-2">
    {/* Coral background accent */}
    <div
      className="absolute inset-0 translate-x-3 -translate-y-3 bg-[#FF503D]"
      style={{
        clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
      }}
    />

    {/* Main panel */}
    <div
      className="relative grid grid-cols-3 bg-[#171717] px-2 py-6 text-center text-[#F3F0E9] sm:px-5 sm:py-7"
      style={{
        clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
      }}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`flex flex-col items-center justify-center px-1 sm:px-3 ${
            index !== 0 ? "border-l-2 border-[#F3F0E9]/70" : ""
          }`}
        >
          <p className="font-[var(--font-barlow)] text-[clamp(30px,4vw,58px)] font-black italic leading-none text-[#C6FF00]">
            {stat.number}
          </p>

          <p className="mt-3 font-[var(--font-barlow)] text-base font-black italic tracking-wide sm:text-xl md:text-2xl">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>

</div>

      </div>

      {/* Decorative diagonal stripes */}
      <div className="pointer-events-none absolute -bottom-1 left-0 flex -skew-x-[30deg] gap-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-12 w-4 bg-[#171717]"
          />
        ))}
      </div>
    </section>
  );
}
