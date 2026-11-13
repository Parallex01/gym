
import Link from "next/link";
import { notFound } from "next/navigation";

const services = {
  "strength-training": {
    number: "01",
    title: "STRENGTH",
    highlight: "TRAINING.",
    subtitle: "Build muscle. Develop power. Become stronger.",
    description:
      "Build a stronger version of yourself with structured strength training. Whether you are a beginner or an experienced lifter, work towards your goals with the right equipment, proper technique and consistent progression.",
    benefits: [
      "Build muscle and improve overall strength",
      "Improve posture and body composition",
      "Develop proper lifting techniques",
      "Progressive workout routines",
      "Improve physical performance",
    ],
    includes: [
      "Access to strength training equipment",
      "Free weights and resistance machines",
      "Guidance on exercise techniques",
      "Structured workout sessions",
    ],
    process: [
      ["01", "ASSESS", "Understand your current fitness level and goals."],
      ["02", "PLAN", "Follow a structured strength training routine."],
      ["03", "TRAIN", "Focus on proper form and consistent effort."],
      ["04", "PROGRESS", "Track improvements and increase your strength."],
    ],
    accent: "STRENGTH IS BUILT, NOT GIVEN.",
  },

  "cardio-fitness": {
    number: "02",
    title: "CARDIO",
    highlight: "FITNESS.",
    subtitle: "Improve endurance. Build stamina. Feel better.",
    description:
      "Improve your cardiovascular health with training designed to increase endurance, stamina and overall fitness. Build consistency through workouts that challenge you at your own pace.",
    benefits: [
      "Improve cardiovascular endurance",
      "Increase stamina and energy levels",
      "Support healthy weight management",
      "Improve heart and lung fitness",
      "Build workout consistency",
    ],
    includes: [
      "Cardio equipment access",
      "Treadmill and cycling workouts",
      "Endurance-focused routines",
      "Fitness progress tracking",
    ],
    process: [
      ["01", "ASSESS", "Understand your current stamina and endurance."],
      ["02", "PREPARE", "Choose a suitable cardio routine."],
      ["03", "PERFORM", "Build consistency through regular workouts."],
      ["04", "IMPROVE", "Gradually increase your endurance."],
    ],
    accent: "KEEP MOVING. KEEP IMPROVING.",
  },

  "personal-training": {
    number: "03",
    title: "PERSONAL",
    highlight: "TRAINING.",
    subtitle: "Individual attention. Training built around you.",
    description:
      "Get a more focused training experience with guidance tailored to your fitness goals, current ability and routine. Work towards your targets with a structured and personalized approach.",
    benefits: [
      "Training tailored to your goals",
      "Individual exercise guidance",
      "Help with proper form and technique",
      "Structured workout planning",
      "Regular progress assessment",
    ],
    includes: [
      "One-on-one training sessions",
      "Personalized workout routine",
      "Exercise technique guidance",
      "Progress monitoring",
    ],
    process: [
      ["01", "DISCOVER", "Discuss your goals and training experience."],
      ["02", "CUSTOMIZE", "Build a workout plan around your needs."],
      ["03", "EXECUTE", "Train with focused individual guidance."],
      ["04", "EVOLVE", "Review progress and adjust your routine."],
    ],
    accent: "YOUR GOALS. YOUR TRAINING.",
  },

  "flexibility-mobility": {
    number: "04",
    title: "FLEXIBILITY",
    highlight: "& MOBILITY.",
    subtitle: "Move freely. Improve control. Stay agile.",
    description:
      "Improve the way your body moves through flexibility and mobility-focused exercises. Build better movement habits that support your workouts and everyday activities.",
    benefits: [
      "Improve range of motion",
      "Develop better movement control",
      "Support workout recovery",
      "Improve movement quality",
      "Build a balanced fitness routine",
    ],
    includes: [
      "Guided stretching routines",
      "Mobility-focused exercises",
      "Movement preparation",
      "Cool-down exercises",
    ],
    process: [
      ["01", "UNDERSTAND", "Identify your movement and flexibility needs."],
      ["02", "PREPARE", "Start with suitable mobility exercises."],
      ["03", "PRACTICE", "Work consistently on controlled movements."],
      ["04", "IMPROVE", "Build better movement over time."],
    ],
    accent: "MOVE BETTER. FEEL STRONGER.",
  },

  "nutrition-planning": {
    number: "05",
    title: "NUTRITION",
    highlight: "PLANNING.",
    subtitle: "Fuel your training. Support your progress.",
    description:
      "Make your fitness routine more effective with nutrition guidance that supports your training goals. Focus on balanced eating habits and a sustainable approach to everyday nutrition.",
    benefits: [
      "Understand your nutritional needs",
      "Build healthier eating habits",
      "Support muscle development goals",
      "Plan meals around your routine",
      "Improve consistency with nutrition",
    ],
    includes: [
      "Basic nutrition guidance",
      "Goal-oriented meal planning",
      "Food habit recommendations",
      "Nutrition progress discussions",
    ],
    process: [
      ["01", "DISCUSS", "Understand your goals and food preferences."],
      ["02", "PLAN", "Create a practical nutrition approach."],
      ["03", "FOLLOW", "Build consistent everyday eating habits."],
      ["04", "REVIEW", "Review your routine and make adjustments."],
    ],
    accent: "TRAIN HARD. FUEL SMART.",
  },

  "group-classes": {
    number: "06",
    title: "GROUP",
    highlight: "CLASSES.",
    subtitle: "Train together. Push harder. Grow together.",
    description:
      "Experience the energy of training together. Group fitness sessions bring people together through structured workouts, shared motivation and a supportive environment.",
    benefits: [
      "Stay motivated through group energy",
      "Build workout consistency",
      "Experience different workout formats",
      "Improve overall fitness",
      "Become part of a fitness community",
    ],
    includes: [
      "Instructor-guided group sessions",
      "Structured class workouts",
      "Group fitness activities",
      "A motivating training environment",
    ],
    process: [
      ["01", "CHOOSE", "Find a class that suits your fitness goals."],
      ["02", "JOIN", "Become part of a group session."],
      ["03", "PARTICIPATE", "Follow guided workouts with the group."],
      ["04", "REPEAT", "Build consistency and enjoy the progress."],
    ],
    accent: "BETTER TOGETHER. STRONGER TOGETHER.",
  },
};

type ServiceSlug = keyof typeof services;

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  if (!Object.prototype.hasOwnProperty.call(services, service)) {
    notFound();
  }

  const plan = services[service as ServiceSlug];

  return (
    <main className="overflow-hidden bg-[#171717] text-[#F3EBDD]">

      {/* HERO */}
      <section className="relative border-b border-white/15 px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#C6FF00]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-[1450px]">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 font-[var(--font-barlow)] text-lg font-bold italic text-white/60 transition hover:text-[#C6FF00]"
          >
            <span>←</span> ALL SERVICES
          </Link>

          <div className="mt-16 grid items-end gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="mb-7 font-[var(--font-barlow)] text-xl font-black italic text-[#C6FF00]">
                SERVICE / {plan.number}
              </p>

              <h1 className="font-[var(--font-barlow)] text-[clamp(65px,10vw,145px)] font-black italic uppercase leading-[0.78] tracking-tight">
                {plan.title}
                <br />
                <span className="mt-4 inline-block -rotate-2 bg-[#C6FF00] px-4 py-2 text-[#171717]">
                  {plan.highlight}
                </span>
              </h1>

              <p className="mt-10 max-w-2xl font-[var(--font-inter)] text-lg font-semibold text-[#F3EBDD] md:text-xl">
                {plan.subtitle}
              </p>
            </div>

            <div className="border-l-4 border-[#FF503D] py-2 pl-6">
              <p className="font-[var(--font-barlow)] text-2xl font-black italic text-[#C6FF00]">
                WHAT IT'S ABOUT
              </p>

              <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
                {plan.description}
              </p>

              <div className="mt-8 flex -skew-x-12 gap-2">
                {[1, 2, 3].map((item) => (
                  <span
                    key={item}
                    className="h-12 w-3 bg-[#C6FF00]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F3EBDD] px-6 py-20 text-[#171717] md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-[var(--font-barlow)] text-lg font-black italic text-[#91C900]">
                01 / THE ADVANTAGE
              </p>

              <h2 className="mt-5 font-[var(--font-barlow)] text-6xl font-black italic uppercase leading-[0.85] md:text-8xl">
                WHY IT
                <br />
                <span className="bg-[#C6FF00] px-2">MATTERS.</span>
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-[#171717]/65">
                Every part of your fitness journey has a purpose. Here's how
                this service can help you move closer to your goals.
              </p>
            </div>

            <div className="border-t-2 border-[#171717]">
              {plan.benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-6 border-b border-[#171717]/30 py-6"
                >
                  <span className="font-[var(--font-barlow)] text-xl font-black italic text-[#91C900]">
                    0{index + 1}
                  </span>

                  <p className="flex-1 font-[var(--font-barlow)] text-xl font-bold uppercase md:text-2xl">
                    {benefit}
                  </p>

                  <span className="text-2xl">↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1450px] gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-[var(--font-barlow)] text-lg font-black italic text-[#C6FF00]">
              02 / YOUR EXPERIENCE
            </p>

            <h2 className="mt-5 font-[var(--font-barlow)] text-6xl font-black italic uppercase leading-[0.85] md:text-8xl">
              WHAT'S
              <br />
              <span className="text-[#C6FF00]">INCLUDED.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/60">
              Get the right foundation, guidance and facilities to make
              your training experience count.
            </p>
          </div>

          <div className="bg-[#F3EBDD] p-7 text-[#171717] md:p-10">
            <div className="mb-8 flex items-center justify-between border-b-2 border-[#171717] pb-5">
              <h3 className="font-[var(--font-barlow)] text-3xl font-black italic">
                SERVICE FEATURES
              </h3>

              <span className="bg-[#C6FF00] px-3 py-2 font-[var(--font-barlow)] text-xl font-black">
                {plan.number}
              </span>
            </div>

            <ul className="space-y-6">
              {plan.includes.map((item, index) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="font-[var(--font-barlow)] text-xl font-black text-[#91C900]">
                    ✓
                  </span>

                  <span className="text-sm font-semibold leading-6 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F3EBDD] px-6 py-20 text-[#171717] md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1450px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-[var(--font-barlow)] text-lg font-black italic text-[#91C900]">
                03 / YOUR JOURNEY
              </p>

              <h2 className="mt-4 font-[var(--font-barlow)] text-6xl font-black italic uppercase leading-[0.85] md:text-8xl">
                HOW IT
                <br />
                <span className="bg-[#C6FF00] px-2">WORKS.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#171717]/65">
              A simple approach to help you stay focused, consistent and
              committed to your fitness goals.
            </p>
          </div>

          <div className="grid border-l border-t border-[#171717]/30 sm:grid-cols-2 xl:grid-cols-4">
            {plan.process.map(([number, title, description]) => (
              <div
                key={number}
                className="border-b border-r border-[#171717]/30 p-7 transition-colors hover:bg-[#C6FF00] md:p-9"
              >
                <span className="font-[var(--font-barlow)] text-5xl font-black italic text-[#91C900]">
                  {number}
                </span>

                <h3 className="mt-12 font-[var(--font-barlow)] text-3xl font-black italic">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#171717]/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#C6FF00] px-6 py-16 text-[#171717] md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="font-[var(--font-barlow)] text-lg font-black italic">
              {plan.accent}
            </p>

            <h2 className="mt-3 font-[var(--font-barlow)] text-5xl font-black italic uppercase leading-[0.9] md:text-7xl">
              READY TO GET STARTED?
            </h2>

            <p className="mt-4 text-sm text-[#171717]/70">
              Take the next step towards your fitness goals.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 -skew-x-3 items-center justify-center gap-5 border-2 border-[#171717] bg-[#FF503D] px-8 py-5 font-[var(--font-barlow)] text-2xl font-black italic shadow-[5px_5px_0_#171717] transition hover:-translate-y-1 hover:shadow-[5px_8px_0_#171717]"
          >
            <span>GET STARTED</span>
            <span className="text-3xl">↗</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
