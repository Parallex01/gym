
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    title: "PUSH YOUR LIMITS",
    category: "TRAINING",
    image: "/images/gallery/athlete-lifting.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "THE TRAINING FLOOR",
    category: "FACILITY",
    image: "/images/gallery/gym-interior.jpg",
    size: "normal",
  },
  {
    id: 3,
    title: "EVERY REP COUNTS",
    category: "TRAINING",
    image: "/images/gallery/weight-training.jpg",
    size: "normal",
  },
  {
    id: 4,
    title: "BUILT THROUGH DISCIPLINE",
    category: "COMMUNITY",
    image: "/images/gallery/gym-community.jpg",
    size: "normal",
  },
  {
    id: 5,
    title: "FIND YOUR PACE",
    category: "TRAINING",
    image: "/images/gallery/cardio-session.jpg",
    size: "large",
  },
  {
    id: 6,
    title: "STRENGTH IN NUMBERS",
    category: "COMMUNITY",
    image: "/images/gallery/group-workout.jpg",
    size: "normal",
  },
  {
    id: 7,
    title: "BUILT FOR PERFORMANCE",
    category: "FACILITY",
    image: "/images/gallery/equipment.jpg",
    size: "normal",
  },
  {
    id: 8,
    title: "YOUR SPACE TO GROW",
    category: "FACILITY",
    image: "/images/gallery/gym-space.jpg",
    size: "normal",
  },
  {
    id: 9,
    title: "NO DAYS WASTED",
    category: "TRAINING",
    image: "/images/gallery/workout-session.jpg",
    size: "normal",
  },
];

const categories = ["ALL", "TRAINING", "FACILITY", "COMMUNITY"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[number] | null
  >(null);

  const filteredImages =
    activeCategory === "ALL"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  return (
    <main className="overflow-hidden bg-[#171717] text-[#F3EBDD]">

      {/* HERO */}
      <section className="relative px-5 pb-14 pt-20 md:px-10 md:pb-20 md:pt-28 lg:px-16">
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-6 flex items-center gap-5">
            <span className="font-[var(--font-barlow)] text-xl font-black italic">
              MUSCLE MONK / GALLERY
            </span>
            <div className="h-[2px] flex-1 bg-[#F3EBDD]/70" />
            <span className="hidden font-[var(--font-inter)] text-xs font-bold tracking-widest md:block">
              BEHIND THE GRIND
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="font-[var(--font-barlow)] text-[clamp(4rem,10vw,9rem)] font-black italic uppercase leading-[0.78] tracking-tight">
                INSIDE OUR
                <br />
                <span className="mt-2 inline-block -rotate-2 bg-[#C6FF00] px-4 py-2 text-[#171717]">
                  GYM.
                </span>
              </h1>
            </div>

            <div className="flex items-end justify-between gap-6 lg:pb-2">
              <div>
                <span className="mb-4 block font-[var(--font-barlow)] text-xl font-black italic text-[#C6FF00]">
                  MORE THAN FOUR WALLS.
                </span>
                <p className="max-w-[380px] font-[var(--font-inter)] text-sm leading-7 text-white/75 md:text-base">
                  A glimpse into the energy, the people and the dedication
                  that make Muscle Monk what it is. Every session has a story.
                </p>
              </div>

              <div className="flex shrink-0 -skew-x-12 gap-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-14 w-3 bg-[#C6FF00] md:h-20 md:w-4"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-y border-white/40 py-4">
            <span className="font-[var(--font-barlow)] text-lg font-black italic">
              THE MUSCLE MONK EXPERIENCE
            </span>
            <span className="font-[var(--font-barlow)] text-lg font-black italic text-[#C6FF00]">
              REAL PEOPLE. REAL PROGRESS.
            </span>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-5 pb-20 md:px-10 md:pb-28 lg:px-16">
        <div className="mx-auto max-w-[1500px]">

          {/* Gallery heading and filters */}
          <div className="mb-10 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <span className="font-[var(--font-barlow)] text-lg font-black italic text-[#C6FF00]">
                A CLOSER LOOK
              </span>
              <h2 className="mt-2 font-[var(--font-barlow)] text-4xl font-black italic uppercase md:text-6xl">
                THE GYM IN <span className="text-[#C6FF00]">ACTION.</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`border border-[#F3EBDD]/50 px-4 py-2 font-[var(--font-barlow)] text-sm font-black italic transition-colors duration-200 ${
                    activeCategory === category
                      ? "border-[#C6FF00] bg-[#C6FF00] text-[#171717]"
                      : "text-[#F3EBDD] hover:border-[#C6FF00] hover:text-[#C6FF00]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Image grid */}
          <div className="grid auto-rows-[230px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                aria-label={`View ${item.title}`}
                className={`group relative overflow-hidden border border-white/20 bg-[#242424] text-left ${
                  item.size === "large" && activeCategory === "ALL"
                    ? "sm:row-span-2"
                    : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute left-5 top-5">
                  <span className="border border-[#C6FF00] bg-[#171717]/80 px-3 py-1 font-[var(--font-barlow)] text-xs font-black italic text-[#C6FF00]">
                    {item.category}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <div>
                    <span className="mb-2 block font-[var(--font-barlow)] text-sm font-bold text-white/60">
                      MM / 0{item.id}
                    </span>
                    <h3 className="font-[var(--font-barlow)] text-2xl font-black italic uppercase leading-none text-white md:text-3xl">
                      {item.title}
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white text-2xl text-white transition-all group-hover:border-[#C6FF00] group-hover:bg-[#C6FF00] group-hover:text-[#171717]">
                    ↗
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/30 pt-5">
            <span className="font-[var(--font-barlow)] text-sm font-bold italic text-white/60">
              SHOWING {filteredImages.length.toString().padStart(2, "0")} MOMENTS
            </span>
            <span className="font-[var(--font-barlow)] text-sm font-bold italic text-[#C6FF00]">
              KEEP MOVING. KEEP GROWING.
            </span>
          </div>
        </div>
      </section>

      {/* IMAGE PREVIEW */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-5 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center border border-white/50 text-3xl text-white transition-colors hover:bg-[#C6FF00] hover:text-[#171717]"
          >
            ×
          </button>

          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[65vh] w-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>

            <div className="mt-5 flex items-center justify-between gap-5">
              <div>
                <span className="font-[var(--font-barlow)] text-sm font-bold text-[#C6FF00]">
                  {selectedImage.category}
                </span>
                <h3 className="mt-1 font-[var(--font-barlow)] text-3xl font-black italic text-white md:text-4xl">
                  {selectedImage.title}
                </h3>
              </div>

              <span className="font-[var(--font-barlow)] text-xl font-black italic text-white/50">
                MM / 0{selectedImage.id}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#F3EBDD] px-5 py-20 text-[#171717] md:px-10 md:py-28 lg:px-16">
        <div className="relative mx-auto flex max-w-[1500px] flex-col justify-between gap-10 lg:flex-row lg:items-end">

          <div>
            <span className="font-[var(--font-barlow)] text-xl font-black italic">
              THIS COULD BE YOUR STORY.
            </span>

            <h2 className="mt-5 font-[var(--font-barlow)] text-[clamp(3.5rem,8vw,7rem)] font-black italic uppercase leading-[0.85]">
              STOP WATCHING.
              <br />
              <span className="bg-[#C6FF00] px-3">START TRAINING.</span>
            </h2>
          </div>

          <div className="max-w-[350px]">
            <p className="mb-7 font-[var(--font-inter)] text-sm leading-7">
              Your fitness journey deserves the right environment.
              Come experience Muscle Monk for yourself.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-5 border-2 border-[#171717] bg-[#FF503D] px-7 py-4 font-[var(--font-barlow)] text-xl font-black italic transition-all hover:-translate-y-1 hover:bg-[#C6FF00]"
            >
              JOIN THE GYM
              <span className="text-2xl">↗</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
