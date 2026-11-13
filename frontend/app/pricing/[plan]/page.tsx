
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const plans = {
  basic: {
    name: "BASIC",
    number: "01",
    price: "1,499",
    tagline: "Build a solid foundation.",
    description:
      "Everything you need to start your fitness journey. Get access to essential gym facilities and build a consistent training routine.",
    accent: "#F3EBDD",
    label: "FOR EVERY BEGINNER",
    features: [
      {
        title: "Gym access (all areas)",
        description:
          "Access the gym floor and available workout areas during regular operating hours.",
      },
      {
        title: "Standard equipment",
        description:
          "Train with the essential strength and cardio equipment needed for a complete workout.",
      },
      {
        title: "Locker facility",
        description:
          "Keep your belongings safely stored while you focus on your workout.",
      },
      {
        title: "Fitness assessment",
        description:
          "Get an initial overview of your fitness level to help you start in the right direction.",
      },
    ],
    ideal: [
      "People starting their fitness journey",
      "Members who prefer independent workouts",
      "Anyone building a consistent gym routine",
    ],
  },
  pro: {
    name: "PRO",
    number: "02",
    price: "2,499",
    tagline: "Train smarter. Get faster results.",
    description:
      "Take your training further with structured workout guidance, expert support and access to group fitness sessions.",
    accent: "#C6FF00",
    label: "MOST POPULAR",
    features: [
      {
        title: "Everything in Basic",
        description:
          "Enjoy all the facilities and benefits included in the Basic membership.",
      },
      {
        title: "Personalized workout plan",
        description:
          "Follow a workout plan designed around your fitness goals and training needs.",
      },
      {
        title: "Expert trainer guidance",
        description:
          "Get guidance from fitness trainers to improve your technique and training approach.",
      },
      {
        title: "Diet & nutrition support",
        description:
          "Receive general nutrition guidance to support your workout and fitness goals.",
      },
      {
        title: "Group fitness classes",
        description:
          "Participate in group sessions and experience a more engaging way to train.",
      },
    ],
    ideal: [
      "People who want structured training",
      "Members who need trainer guidance",
      "People looking for a balanced fitness routine",
    ],
  },
  elite: {
    name: "ELITE",
    number: "03",
    price: "3,999",
    tagline: "The complete fitness experience.",
    description:
      "Get a more personalized fitness experience with one-on-one training, advanced body analysis and additional wellness support.",
    accent: "#FF503D",
    label: "PREMIUM EXPERIENCE",
    features: [
      {
        title: "Everything in Pro",
        description:
          "Get all the facilities, guidance and benefits included in the Pro membership.",
      },
      {
        title: "1-on-1 personal training",
        description:
          "Work directly with a personal trainer for focused, individual training sessions.",
      },
      {
        title: "Advanced body analysis",
        description:
          "Get a more detailed understanding of your body composition and fitness progress.",
      },
      {
        title: "Priority class booking",
        description:
          "Get priority when booking available group fitness classes.",
      },
      {
        title: "Recovery & wellness support",
        description:
          "Get additional guidance focused on recovery and maintaining a healthy fitness routine.",
      },
    ],
    ideal: [
      "People who prefer individual attention",
      "Members with specific fitness goals",
      "People looking for a more complete fitness experience",
    ],
  },
};

type PlanKey = keyof typeof plans;

export function generateStaticParams() {
  return Object.keys(plans).map((plan) => ({ plan }));
}

export default async function PlanDetails({
  params,
}: {
  params: Promise<{ plan: string }>;
}) {
  const { plan: slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(plans, slug)) {
    notFound();
  }

  const plan = plans[slug as PlanKey];

  const otherPlans = Object.entries(plans).filter(
    ([key]) => key !== slug
  );

  return (
    <main className="min-h-screen bg-[#171717] text-[#F3EBDD]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/athlete.png"
            alt="Athlete training at Muscle Monk"
            fill
            priority
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/90 to-[#171717]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-[#171717]/30" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-8 md:px-12 md:pb-28 md:pt-12">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-3 text-sm font-semibold text-white/60 transition hover:text-[#C6FF00]"
          >
            <span className="text-xl">←</span>
            BACK TO MEMBERSHIPS
          </Link>

          <div className="mt-20 grid items-end gap-12 md:mt-28 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="mb-5 text-sm font-bold tracking-[0.25em] text-[#C6FF00]">
                MEMBERSHIP / {plan.number}
              </p>

              <h1 className="font-[var(--font-barlow)] text-7xl font-black italic leading-[0.85] tracking-tight sm:text-8xl md:text-[130px]">
                {plan.name}
                <span className="text-[#C6FF00]">.</span>
              </h1>

              <p className="mt-8 max-w-xl font-[var(--font-barlow)] text-2xl font-bold uppercase md:text-3xl">
                {plan.tagline}
              </p>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/65 md:text-base">
                {plan.description}
              </p>
            </div>

            <div className="border-l-2 border-[#C6FF00] pl-7 md:pb-3">
              <p className="text-xs font-bold tracking-[0.2em] text-white/50">
                MEMBERSHIP STARTS AT
              </p>

              <div className="mt-3 flex items-start gap-2">
                <span className="mt-3 text-3xl font-bold">₹</span>
                <span className="font-[var(--font-barlow)] text-6xl font-black italic sm:text-7xl">
                  {plan.price}
                </span>
              </div>

              <p className="mt-1 text-sm font-bold tracking-widest text-[#C6FF00]">
                / MONTH
              </p>

              <a
                href={`/contact?plan=${slug}`}
                className="mt-8 inline-flex w-full items-center justify-between bg-[#FF503D] px-6 py-5 font-[var(--font-barlow)] text-xl font-black italic text-[#171717] transition hover:bg-[#C6FF00] sm:max-w-xs"
              >
                CHOOSE THIS PLAN
                <span className="text-2xl">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative h-1 w-full bg-[#C6FF00]" />
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#C6FF00]">
              WHAT YOU GET
            </p>
            <h2 className="font-[var(--font-barlow)] text-5xl font-black italic uppercase sm:text-6xl">
              BUILT INTO YOUR PLAN<span className="text-[#C6FF00]">.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/50">
            Every feature is designed to help you train better, stay
            consistent and make progress.
          </p>
        </div>

        <div className="grid gap-px bg-white/15 md:grid-cols-2">
          {plan.features.map((feature, index) => (
            <div
              key={feature.title}
              className="group flex gap-6 bg-[#202020] p-7 transition hover:bg-[#C6FF00] md:p-9"
            >
              <span className="font-[var(--font-barlow)] text-2xl font-black text-[#C6FF00] transition group-hover:text-[#171717]">
                0{index + 1}
              </span>

              <div>
                <h3 className="font-[var(--font-barlow)] text-2xl font-black uppercase text-[#F3EBDD] transition group-hover:text-[#171717]">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/55 transition group-hover:text-[#171717]/75">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="bg-[#F3EBDD] px-6 py-20 text-[#171717] md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-xs font-black tracking-[0.2em] text-[#789500]">
              FIND YOUR FIT / {plan.number}
            </p>

            <h2 className="font-[var(--font-barlow)] text-5xl font-black italic uppercase leading-[0.9] sm:text-7xl">
              MADE FOR YOUR
              <br />
              KIND OF GRIND.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-black/60">
              The right membership depends on how you like to train and what
              you want to achieve. Here's who this plan is designed for.
            </p>
          </div>

          <div className="border-t-2 border-[#171717]">
            {plan.ideal.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 border-b border-black/20 py-6"
              >
                <span className="font-[var(--font-barlow)] text-xl font-black text-[#789500]">
                  0{index + 1}
                </span>
                <p className="text-base font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE SUMMARY */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#C6FF00]">
              SIMPLE. STRAIGHTFORWARD.
            </p>

            <h2 className="font-[var(--font-barlow)] text-5xl font-black italic uppercase sm:text-7xl">
              YOUR NEXT STEP
              <br />
              STARTS HERE.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
              Choose the membership that works for your goals. Get in touch
              with our team to discuss availability and joining details.
            </p>
          </div>

          <div className="border border-white/20 bg-[#202020] p-7 md:p-10">
            <p className="text-xs font-bold tracking-[0.2em] text-white/45">
              SELECTED MEMBERSHIP
            </p>

            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-[var(--font-barlow)] text-4xl font-black italic">
                {plan.name}
              </h3>
              <span className="bg-[#C6FF00] px-3 py-1 text-xs font-black text-[#171717]">
                {plan.label}
              </span>
            </div>

            <div className="my-7 border-t border-white/15" />

            <div className="flex items-end justify-between">
              <span className="text-sm text-white/50">Monthly membership</span>
              <span className="font-[var(--font-barlow)] text-4xl font-black">
                ₹{plan.price}
              </span>
            </div>

            <a
              href={`/contact?plan=${slug}`}
              className="mt-8 flex w-full items-center justify-between bg-[#C6FF00] px-6 py-5 font-[var(--font-barlow)] text-xl font-black italic text-[#171717] transition hover:bg-[#FF503D]"
            >
              GET STARTED
              <span className="text-2xl">↗</span>
            </a>

            <p className="mt-4 text-center text-xs text-white/35">
              Contact the gym for membership and joining details.
            </p>
          </div>
        </div>
      </section>

      {/* EXPLORE OTHER PLANS */}
      <section className="border-t border-white/10 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#C6FF00]">
            STILL EXPLORING?
          </p>

          <h2 className="mb-10 font-[var(--font-barlow)] text-4xl font-black italic uppercase sm:text-5xl">
            CHECK OUT OTHER PLANS.
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {otherPlans.map(([key, other]) => (
              <Link
                href={`/pricing/${key}`}
                key={key}
                className="group flex items-center justify-between border border-white/20 p-6 transition hover:border-[#C6FF00] hover:bg-[#C6FF00]"
              >
                <div>
                  <p className="text-xs font-bold tracking-widest text-white/40 transition group-hover:text-black/50">
                    MEMBERSHIP / {other.number}
                  </p>

                  <h3 className="mt-2 font-[var(--font-barlow)] text-3xl font-black italic transition group-hover:text-[#171717]">
                    {other.name}
                  </h3>
                </div>

                <div className="text-right">
                  <p className="font-[var(--font-barlow)] text-3xl font-black transition group-hover:text-[#171717]">
                    ₹{other.price}
                  </p>
                  <p className="text-xs text-white/40 transition group-hover:text-black/60">
                    / MONTH
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
