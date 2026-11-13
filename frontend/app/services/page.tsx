
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "STRENGTH TRAINING",
    slug: "strength-training",
    number: "01",
    description:
      "Build muscle, develop power and improve your overall strength with structured resistance training.",
    image: "/images/services/strength.jpg",
    tag: "BUILD STRENGTH",
  },
  {
    title: "CARDIO FITNESS",
    slug: "cardio-fitness",
    number: "02",
    description:
      "Improve cardiovascular health, boost stamina and build endurance through effective cardio workouts.",
    image: "/images/services/cardio.jpg",
    tag: "BUILD ENDURANCE",
  },
  {
    title: "PERSONAL TRAINING",
    slug: "personal-training",
    number: "03",
    description:
      "Get individual attention, personalized workout sessions and expert guidance designed around your goals.",
    image: "/images/services/personal.jpg",
    tag: "TRAIN PERSONALLY",
  },
  {
    title: "FLEXIBILITY & MOBILITY",
    slug: "flexibility-mobility",
    number: "04",
    description:
      "Improve flexibility, movement and balance while building a more mobile and resilient body.",
    image: "/images/services/flexibility.jpg",
    tag: "MOVE BETTER",
  },
  {
    title: "NUTRITION PLANNING",
    slug: "nutrition-planning",
    number: "05",
    description:
      "Support your fitness journey with practical nutrition guidance and personalized dietary planning.",
    image: "/images/services/nutrition.jpg",
    tag: "FUEL YOUR BODY",
  },
  {
    title: "GROUP CLASSES",
    slug: "group-classes",
    number: "06",
    description:
      "Train alongside a motivating community with energetic sessions led by experienced coaches.",
    image: "/images/services/group.jpg",
    tag: "TRAIN TOGETHER",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#F3EBDD] text-[#171717]">

      {/* HERO */}
      <section className="relative px-5 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28 lg:px-16">
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-6 flex items-center gap-5">
            <span className="font-[var(--font-barlow)] text-xl font-black italic">
              MUSCLE MONK / SERVICES
            </span>
            <div className="h-[2px] flex-1 bg-[#171717]" />
            <span className="hidden font-[var(--font-inter)] text-xs font-bold tracking-widest md:block">
              TRAIN WITH PURPOSE
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="font-[var(--font-barlow)] text-[clamp(4rem,10vw,9rem)] font-black italic uppercase leading-[0.78] tracking-tight">
                TRAIN
                <br />
                <span className="inline-block -rotate-2 bg-[#C6FF00] px-4 py-2">
                  YOUR WAY.
                </span>
              </h1>
            </div>

            <div className="flex items-end justify-between gap-6 lg:pb-2">
              <div>
                <span className="mb-4 block font-[var(--font-barlow)] text-lg font-black italic">
                  MORE THAN WORKOUTS.
                </span>
                <p className="max-w-[390px] font-[var(--font-inter)] text-sm leading-7 md:text-base">
                  From building strength to improving endurance, discover
                  training experiences designed to help you become stronger,
                  healthier and more confident.
                </p>
              </div>

              <div className="hidden shrink-0 -skew-x-12 gap-2 sm:flex">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-16 w-3 bg-[#C6FF00] md:h-20 md:w-4"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-y-2 border-[#171717] py-4">
            <span className="font-[var(--font-barlow)] text-lg font-black italic">
              FIND YOUR TRAINING STYLE
            </span>
            <span className="font-[var(--font-barlow)] text-lg font-black italic">
              06 SERVICES / 01 GOAL
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 pb-20 md:px-10 md:pb-28 lg:px-16">
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-[var(--font-barlow)] text-lg font-black italic">
                EXPLORE OUR PROGRAMS
              </span>
              <h2 className="mt-2 font-[var(--font-barlow)] text-5xl font-black italic uppercase leading-none md:text-7xl">
                WHAT FITS <span className="text-[#A4D900]">YOU?</span>
              </h2>
            </div>

            <p className="max-w-[330px] font-[var(--font-inter)] text-sm leading-6">
              Every fitness journey is different. Choose a service that
              matches your goals and start making progress.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                href={`/services/${service.slug}`}
                key={service.slug}
                className="group relative block"
              >
                <article className="relative overflow-hidden border-2 border-[#171717] bg-[#F3EBDD] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_#C6FF00]">

                  {/* Image */}
                  <div className="relative h-[260px] overflow-hidden bg-[#171717] md:h-[290px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent" />

                    <span className="absolute left-5 top-5 bg-[#C6FF00] px-4 py-2 font-[var(--font-barlow)] text-sm font-black italic">
                      {service.tag}
                    </span>

                    <span className="absolute bottom-4 right-5 font-[var(--font-barlow)] text-6xl font-black italic text-white/70">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="max-w-[270px] font-[var(--font-barlow)] text-3xl font-black italic uppercase leading-[0.95] md:text-4xl">
                        {service.title}
                      </h3>

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-[#171717] text-3xl transition-all duration-300 group-hover:border-[#C6FF00] group-hover:bg-[#C6FF00]">
                        ↗
                      </span>
                    </div>

                    <p className="mt-5 min-h-[60px] font-[var(--font-inter)] text-sm leading-6 text-[#171717]/75">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-[#171717]/40 pt-4">
                      <span className="font-[var(--font-barlow)] text-lg font-black italic">
                        EXPLORE SERVICE
                      </span>
                      <span className="h-[3px] w-16 bg-[#C6FF00] transition-all duration-300 group-hover:w-28" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#171717] px-5 py-20 text-[#F3EBDD] md:px-10 md:py-28 lg:px-16">
        <div className="relative mx-auto flex max-w-[1500px] flex-col justify-between gap-10 lg:flex-row lg:items-end">

          <div>
            <span className="font-[var(--font-barlow)] text-xl font-black italic text-[#C6FF00]">
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h2 className="mt-5 font-[var(--font-barlow)] text-[clamp(3.5rem,8vw,7rem)] font-black italic uppercase leading-[0.85]">
              READY TO
              <br />
              <span className="text-[#C6FF00]">GET STRONGER?</span>
            </h2>
          </div>

          <div className="max-w-[350px]">
            <p className="mb-7 font-[var(--font-inter)] text-sm leading-7 text-white/65">
              Not sure which training program is right for you? Talk to our
              team and find the right place to start.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-5 border-2 border-[#C6FF00] bg-[#C6FF00] px-7 py-4 font-[var(--font-barlow)] text-xl font-black italic text-[#171717] transition-all hover:bg-transparent hover:text-[#C6FF00]"
            >
              TALK TO OUR TEAM
              <span className="text-2xl">↗</span>
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-10 right-10 h-40 w-40 rotate-12 border-[20px] border-[#C6FF00]/10 md:h-64 md:w-64" />
      </section>

    </main>
  );
}
