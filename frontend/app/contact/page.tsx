"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const contactInfo = [
  { label: "LOCATION", value: "Haldwani, Uttarakhand", symbol: "⌖" },
  { label: "PHONE", value: "+91 98765 43210", symbol: "☎" },
  { label: "EMAIL", value: "hello@musclemonk.in", symbol: "✉" },
  { label: "HOURS", value: "Mon–Sat: 5am – 10pm\nSun: 7am – 6pm", symbol: "◷" },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const planFromUrl = searchParams.get("plan") ?? "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    plan: planFromUrl,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
        <span className="font-[var(--font-barlow)] text-7xl font-black italic text-[#C6FF00]">✓</span>
        <h2 className="font-[var(--font-barlow)] text-4xl font-black italic md:text-5xl">
          MESSAGE RECEIVED!
        </h2>
        <p className="max-w-sm font-[var(--font-inter)] text-sm leading-7 text-white/60">
          Thanks for reaching out. Our team will get back to you within 24 hours.
        </p>
        <Link
          href="/"
          className="-skew-x-3 bg-[#C6FF00] px-8 py-4 font-[var(--font-barlow)] text-xl font-black italic text-[#171717] transition hover:-translate-y-1"
        >
          BACK TO HOME
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="font-[var(--font-barlow)] text-xs font-bold tracking-[0.2em] text-white/50">YOUR NAME *</label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Doe"
            className="border border-white/20 bg-white/5 px-4 py-3 font-[var(--font-inter)] text-sm text-[#F3EBDD] placeholder:text-white/25 focus:border-[#C6FF00] focus:outline-none" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-[var(--font-barlow)] text-xs font-bold tracking-[0.2em] text-white/50">PHONE NUMBER *</label>
          <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
            className="border border-white/20 bg-white/5 px-4 py-3 font-[var(--font-inter)] text-sm text-[#F3EBDD] placeholder:text-white/25 focus:border-[#C6FF00] focus:outline-none" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-[var(--font-barlow)] text-xs font-bold tracking-[0.2em] text-white/50">EMAIL ADDRESS *</label>
        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@email.com"
          className="border border-white/20 bg-white/5 px-4 py-3 font-[var(--font-inter)] text-sm text-[#F3EBDD] placeholder:text-white/25 focus:border-[#C6FF00] focus:outline-none" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-[var(--font-barlow)] text-xs font-bold tracking-[0.2em] text-white/50">INTERESTED IN</label>
        <select name="plan" value={form.plan} onChange={handleChange}
          className="border border-white/20 bg-[#1a1a1a] px-4 py-3 font-[var(--font-inter)] text-sm text-[#F3EBDD] focus:border-[#C6FF00] focus:outline-none">
          <option value="">Select a membership / service</option>
          <option value="basic">Basic Membership — ₹1,499/mo</option>
          <option value="pro">Pro Membership — ₹2,499/mo</option>
          <option value="elite">Elite Membership — ₹3,999/mo</option>
          <option value="strength-training">Strength Training</option>
          <option value="cardio-fitness">Cardio Fitness</option>
          <option value="personal-training">Personal Training</option>
          <option value="flexibility-mobility">Flexibility &amp; Mobility</option>
          <option value="nutrition-planning">Nutrition Planning</option>
          <option value="group-classes">Group Classes</option>
          <option value="general">General Enquiry</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-[var(--font-barlow)] text-xs font-bold tracking-[0.2em] text-white/50">YOUR MESSAGE</label>
        <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your fitness goals..."
          className="resize-none border border-white/20 bg-white/5 px-4 py-3 font-[var(--font-inter)] text-sm text-[#F3EBDD] placeholder:text-white/25 focus:border-[#C6FF00] focus:outline-none" />
      </div>

      <button type="submit"
        className="group flex items-center justify-between border-2 border-[#C6FF00] bg-[#C6FF00] px-7 py-4 font-[var(--font-barlow)] text-xl font-black italic text-[#171717] transition-all hover:-translate-y-1 hover:border-[#FF503D] hover:bg-[#FF503D]">
        SEND MESSAGE
        <span className="text-2xl transition-transform group-hover:translate-x-1">↗</span>
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#171717] text-[#F3EBDD]">

      {/* HERO */}
      <section className="border-b border-white/10 px-6 pb-16 pt-20 md:px-12 md:pb-20 md:pt-28 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-6 flex items-center gap-5">
            <span className="font-[var(--font-barlow)] text-xl font-black italic">MUSCLE MONK / CONTACT</span>
            <div className="h-[2px] flex-1 bg-white/20" />
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h1 className="font-[var(--font-barlow)] text-[clamp(4rem,10vw,9rem)] font-black italic uppercase leading-[0.78] tracking-tight">
              GET IN<br />
              <span className="mt-2 inline-block -rotate-2 bg-[#C6FF00] px-4 py-2 text-[#171717]">TOUCH.</span>
            </h1>
            <div className="lg:pb-3">
              <p className="font-[var(--font-inter)] text-sm leading-7 text-white/60 md:text-base">
                Have a question, want to join or just want to know more? Drop us a message and our team will get back to you.
              </p>
              <div className="mt-5 flex -skew-x-12 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-3 bg-[#C6FF00] md:h-14 md:w-4" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

          {/* Left: Contact Info */}
          <div>
            <p className="mb-8 font-[var(--font-barlow)] text-lg font-black italic text-[#C6FF00]">01 / FIND US</p>
            <div className="flex flex-col gap-px border border-white/10 bg-white/10">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-5 bg-[#1a1a1a] p-6 md:p-7">
                  <span className="mt-0.5 text-2xl text-[#C6FF00]">{info.symbol}</span>
                  <div>
                    <p className="font-[var(--font-barlow)] text-xs font-bold tracking-[0.2em] text-white/40">{info.label}</p>
                    <p className="mt-1 whitespace-pre-line font-[var(--font-inter)] text-sm leading-6 text-white/80">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 border-t border-white/15 pt-8">
              <p className="mb-4 font-[var(--font-barlow)] text-sm font-black italic text-white/40">LOOKING FOR MEMBERSHIP OPTIONS?</p>
              <Link href="/pricing" className="inline-flex items-center gap-3 font-[var(--font-barlow)] text-lg font-black italic text-[#C6FF00] transition hover:text-[#FF503D]">
                VIEW OUR PLANS <span className="text-2xl">↗</span>
              </Link>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <p className="mb-8 font-[var(--font-barlow)] text-lg font-black italic text-[#C6FF00]">02 / SEND A MESSAGE</p>
            <Suspense fallback={<div className="text-sm text-white/40">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA STRIP */}
      <section className="bg-[#C6FF00] px-6 py-10 text-[#171717] md:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-[var(--font-barlow)] text-lg font-black italic">NOT READY TO MESSAGE YET?</p>
            <h2 className="mt-1 font-[var(--font-barlow)] text-3xl font-black italic uppercase md:text-4xl">
              WALK IN AND MEET THE TEAM.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/about"
              className="border-2 border-[#171717] px-6 py-3 font-[var(--font-barlow)] text-lg font-black italic transition hover:bg-[#171717] hover:text-[#C6FF00]">
              ABOUT US ↗
            </Link>
            <Link href="/services"
              className="border-2 border-[#171717] bg-[#171717] px-6 py-3 font-[var(--font-barlow)] text-lg font-black italic text-[#C6FF00] transition hover:border-[#FF503D] hover:bg-[#FF503D] hover:text-[#171717]">
              OUR SERVICES ↗
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

