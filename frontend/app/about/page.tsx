
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "COMMUNITY",
    description: "A supportive space where everyone belongs and grows together.",
    symbol: "◎",
  },
  {
    number: "02",
    title: "DISCIPLINE",
    description: "Consistency, commitment and effort create lasting results.",
    symbol: "↗",
  },
  {
    number: "03",
    title: "EXCELLENCE",
    description: "We believe in quality training, guidance and facilities.",
    symbol: "✦",
  },
  {
    number: "04",
    title: "WELLNESS",
    description: "Building a healthier lifestyle, inside and outside the gym.",
    symbol: "♡",
  },
];

const stats = [
  { number: "5+", label: "YEARS OF EXPERIENCE" },
  { number: "10K+", label: "HAPPY MEMBERS" },
  { number: "25+", label: "EXPERT TRAINERS" },
  { number: "100%", label: "COMMITMENT" },
];

const trainers = [
  {
    number: "01",
    name: "STRENGTH COACH",
    role: "Strength & Conditioning",
    description: "Build strength with structured training and expert guidance.",
  },
  {
    number: "02",
    name: "FITNESS COACH",
    role: "Cardio & Endurance",
    description: "Improve stamina, endurance and overall fitness.",
  },
  {
    number: "03",
    name: "PERSONAL COACH",
    role: "Personal Training",
    description: "Get a training approach tailored to your goals.",
  },
  {
    number: "04",
    name: "WELLNESS COACH",
    role: "Nutrition & Wellness",
    description: "Build healthier habits that support your fitness journey.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#171717] text-[#F3EBDD]">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-white/15">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/about/about-athlete.png"
            alt="Muscle Monk athlete"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171717] via-[#171717]/90 to-[#171717]/40" />

        <div className="mx-auto grid min-h-[620px] max-w-[1500px] items-center gap-12 px-6 py-20 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-5">
              <span className="font-[var(--font-barlow)] text-xl font-bold italic tracking-wide text-[#C6FF00]">
                ABOUT MUSCLE MONK
              </span>
              <div className="h-px max-w-40 flex-1 bg-white/50" />
            </div>

            <h1 className="font-[var(--font-barlow)] text-[clamp(60px,8vw,120px)] font-black italic leading-[0.84] tracking-tight">
              MORE THAN
              <br />
              A GYM.
              <br />
              <span className="mt-3 inline-block -skew-x-3 bg-[#C6FF00] px-4 py-1 text-[#171717]">
                A COMMUNITY.
              </span>
            </h1>

            <p className="mt-9 max-w-xl font-[var(--font-inter)] text-sm leading-7 text-white/75 md:text-base">
              A place built for people who want to become stronger,
              healthier and more confident. Train with purpose, stay
              consistent and grow with a community that pushes you forward.
            </p>

            <Link
              href="/pricing"
              className="mt-9 inline-flex -skew-x-3 items-center gap-5 bg-[#FF503D] px-7 py-4 font-[var(--font-barlow)] text-2xl font-black italic text-[#171717] shadow-[5px_5px_0_#F3EBDD] transition hover:-translate-y-1 hover:shadow-[5px_8px_0_#F3EBDD]"
            >
              <span className="skew-x-3">JOIN THE MOVEMENT</span>
              <span className="skew-x-3 text-3xl">↗</span>
            </Link>
          </div>

          <div className="relative mx-auto hidden h-[430px] w-full max-w-[480px] lg:block">
            <div className="absolute left-8 top-5 h-[92%] w-[85%] -rotate-6 border-[12px] border-[#C6FF00]" />

            <div className="absolute inset-0 overflow-hidden border-4 border-[#F3EBDD]">
              <Image
                src="/images/about/about-athlete.png"
                alt="Athlete at Muscle Monk"
                fill
                sizes="480px"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-5 -right-4 bg-[#FF503D] px-5 py-3 font-[var(--font-barlow)] text-xl font-black italic text-[#171717]">
              TRAIN. GROW. REPEAT.
            </div>
          </div>
        </div>

        <div className="absolute right-8 top-10 hidden -skew-x-12 gap-3 md:flex">
          {[1, 2, 3].map((item) => (
            <span key={item} className="h-20 w-4 bg-[#C6FF00]" />
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="relative overflow-hidden bg-[#F3EBDD] px-6 py-20 text-[#171717] md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -left-4 -top-4 h-full w-full border-[8px] border-[#FF503D]" />
            <div className="absolute -bottom-5 -left-5 h-28 w-28 bg-[#C6FF00]" />

            <div className="relative z-10 aspect-[4/4.7] overflow-hidden border border-[#171717] bg-[#171717]">
              <Image
                src="/images/about/about-athlete.png"
                alt="Athlete training at Muscle Monk"
                fill
                sizes="(max-width: 768px) 90vw, 470px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-7 right-0 z-20 bg-[#C6FF00] px-5 py-3 shadow-[4px_4px_0_#171717] sm:-right-5">
              <p className="font-[var(--font-barlow)] text-lg font-black italic uppercase sm:text-xl">
                BUILT ON DISCIPLINE.
              </p>
            </div>

            <span className="absolute -left-2 top-5 z-20 font-[var(--font-barlow)] text-sm font-black tracking-widest text-[#F3EBDD]">
              MM / 001
            </span>
          </div>

          <div>
            <div className="mb-7 flex items-center gap-5">
              <span className="shrink-0 font-[var(--font-barlow)] text-lg font-black italic">
                01 / OUR STORY
              </span>
              <div className="h-[2px] flex-1 bg-[#171717]/40" />
            </div>

            <h2 className="font-[var(--font-barlow)] text-[clamp(48px,6.5vw,82px)] font-black italic uppercase leading-[0.88] tracking-tight">
              THE JOURNEY
              <br />
              <span className="text-[#91C900]">BEGINS HERE.</span>
            </h2>

            <div className="mt-9 max-w-2xl space-y-5 font-[var(--font-inter)] text-sm leading-7 text-[#171717]/75 sm:text-base sm:leading-8">
              <p>
                Muscle Monk is built around a simple idea — fitness should be
                accessible, motivating and part of everyday life.
              </p>

              <p>
                Whether you are taking your first step into the gym or working
                towards a new personal best, your journey deserves the right
                environment, the right guidance and the motivation to keep going.
              </p>
            </div>

            <div className="my-9 h-px w-full bg-[#171717]/25" />

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-l-[4px] border-[#C6FF00] pl-5">
                <span className="mb-2 block font-[var(--font-barlow)] text-xs font-bold tracking-[0.2em] text-[#171717]/50">
                  01 — OUR PURPOSE
                </span>

                <h3 className="font-[var(--font-barlow)] text-3xl font-black italic uppercase">
                  OUR MISSION
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#171717]/70">
                  Help people build strength, confidence and healthier habits
                  through consistent training and expert guidance.
                </p>
              </div>

              <div className="border-l-[4px] border-[#FF503D] pl-5">
                <span className="mb-2 block font-[var(--font-barlow)] text-xs font-bold tracking-[0.2em] text-[#171717]/50">
                  02 — OUR FUTURE
                </span>

                <h3 className="font-[var(--font-barlow)] text-3xl font-black italic uppercase">
                  OUR VISION
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#171717]/70">
                  Create a fitness community driven by progress, discipline
                  and genuine support for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-8 right-12 hidden -skew-x-12 gap-2 opacity-80 md:flex">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-20 w-3 bg-[#C6FF00]" />
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-white/15 bg-[#171717] py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12 lg:px-16">

          {/* Section Header */}
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-[var(--font-barlow)] text-xl font-bold italic text-[#C6FF00]">
                02 / WHAT DRIVES US
              </p>
              <h2 className="mt-3 font-[var(--font-barlow)] text-[clamp(3.5rem,8vw,7rem)] font-black italic leading-[0.88]">
                OUR <span className="text-[#C6FF00]">VALUES.</span>
              </h2>
            </div>
            <p className="max-w-sm font-[var(--font-inter)] text-sm leading-7 text-white/55 lg:text-right">
              More than workouts and equipment. These are the principles
              behind the Muscle Monk experience.
            </p>
          </div>

          {/* Value Cards */}
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.number}
                className="group relative flex flex-col justify-between overflow-hidden bg-[#1a1a1a] p-8 text-[#F3EBDD] transition-all duration-300 hover:bg-[#C6FF00] hover:text-[#171717] md:p-10"
              >
                {/* Top row: number + icon */}
                <div className="flex items-start justify-between">
                  <span className="font-[var(--font-barlow)] text-xs font-bold tracking-[0.2em] text-white/35 transition-colors duration-300 group-hover:text-[#171717]/50">
                    / {value.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center bg-[#C6FF00] text-2xl text-[#171717] transition-all duration-300 group-hover:bg-[#171717] group-hover:text-[#C6FF00]">
                    {value.symbol}
                  </div>
                </div>

                {/* Bottom: title + desc */}
                <div className="mt-16">
                  {/* Large faint background number */}
                  <span className="pointer-events-none absolute -bottom-4 -left-2 select-none font-[var(--font-barlow)] text-[8rem] font-black italic leading-none text-white/5 transition-colors duration-300 group-hover:text-[#171717]/10">
                    {value.number}
                  </span>

                  <h3 className="relative font-[var(--font-barlow)] text-[2rem] font-black italic uppercase leading-none tracking-tight md:text-[2.4rem]">
                    {value.title}
                  </h3>

                  <div className="mt-3 h-[3px] w-10 bg-[#C6FF00] transition-all duration-300 group-hover:bg-[#171717]/30" />

                  <p className="relative mt-4 font-[var(--font-inter)] text-sm leading-6 text-white/55 transition-colors duration-300 group-hover:text-[#171717]/65">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* NUMBERS */}
      <section className="bg-[#F3EBDD] py-14 text-[#171717] md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12 lg:px-16">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-[var(--font-barlow)] text-5xl font-black italic leading-none md:text-6xl">
              MUSCLE MONK
              <br />
              <span className="bg-[#C6FF00] px-2">IN NUMBERS.</span>
            </h2>

            <p className="max-w-xs text-sm leading-6 text-[#171717]/65">
              Every milestone represents effort, consistency and a community
              moving forward.
            </p>
          </div>

          <div className="grid grid-cols-2 border-y-2 border-[#171717] md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-4 py-8 text-center md:py-10 ${
                  index !== 0 ? "md:border-l-2 md:border-[#171717]/25" : ""
                } ${
                  index % 2 !== 0 ? "border-l border-[#171717]/20" : ""
                } ${
                  index > 1 ? "border-t border-[#171717]/20 md:border-t-0" : ""
                }`}
              >
                <p className="font-[var(--font-barlow)] text-5xl font-black italic text-[#8FB900] md:text-7xl">
                  {stat.number}
                </p>

                <p className="mt-3 font-[var(--font-barlow)] text-base font-black italic md:text-xl">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING TEAM */}
      <section className="bg-[#171717] py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12 lg:px-16">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-[var(--font-barlow)] text-xl font-bold italic text-[#C6FF00]">
                03 / THE PEOPLE BEHIND YOUR PROGRESS
              </p>

              <h2 className="mt-3 font-[var(--font-barlow)] text-6xl font-black italic leading-[0.9] md:text-8xl">
                TRAIN WITH
                <br />
                <span className="text-[#C6FF00]">PURPOSE.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/60">
              The right guidance can make every workout count. Find the
              training approach that works for your goals.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {trainers.map((trainer) => (
              <article
                key={trainer.number}
                className="border border-white/20 bg-[#222222] transition duration-300 hover:-translate-y-2 hover:border-[#C6FF00]"
              >
                <div className="relative flex h-48 items-end justify-between overflow-hidden bg-[#F3EBDD] p-5 text-[#171717]">
                  <span className="absolute -right-3 -top-12 font-[var(--font-barlow)] text-[170px] font-black italic leading-none text-[#C6FF00]">
                    {trainer.number}
                  </span>

                  <span className="relative z-10 font-[var(--font-barlow)] text-2xl font-black italic">
                    MUSCLE
                    <br />
                    MONK.
                  </span>

                  <span className="relative z-10 h-3 w-16 -skew-x-12 bg-[#FF503D]" />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold tracking-[0.2em] text-[#C6FF00]">
                    {trainer.role}
                  </p>

                  <h3 className="mt-3 font-[var(--font-barlow)] text-2xl font-black italic">
                    {trainer.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {trainer.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#C6FF00] py-12 text-[#171717] md:py-16">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-6 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div>
            <p className="font-[var(--font-barlow)] text-lg font-black italic">
              YOUR NEXT CHAPTER STARTS NOW.
            </p>

            <h2 className="mt-2 font-[var(--font-barlow)] text-5xl font-black italic leading-[0.95] md:text-7xl">
              READY TO GET STRONGER?
            </h2>
          </div>

          <Link
            href="/pricing"
            className="inline-flex shrink-0 -skew-x-3 items-center justify-center gap-5 border-2 border-[#171717] bg-[#FF503D] px-8 py-4 font-[var(--font-barlow)] text-2xl font-black italic shadow-[5px_5px_0_#171717] transition hover:-translate-y-1 hover:shadow-[5px_8px_0_#171717]"
          >
            GET MEMBERSHIP <span className="text-3xl">↗</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
