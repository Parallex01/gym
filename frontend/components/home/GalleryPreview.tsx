
import Image from "next/image";
import Link from "next/link";

const previewImages = [
  {
    src: "/images/gallery/athlete-training.png",
    alt: "Athlete lifting weights",
    className: "md:row-span-2",
  },
  {
    src: "/images/gallery/gym-interior.png",
    alt: "Muscle Monk gym interior",
    className: "",
  },
  {
    src: "/images/gallery/cardio-training.png",
    alt: "Cardio training session",
    className: "",
  },
];

export default function GalleryPreview() {
  return (
    <section className="relative overflow-hidden bg-[#171717] px-5 py-16 text-[#F3F0E9] md:px-10 lg:px-16 lg:py-24">

      <div className="relative mx-auto max-w-[1500px]">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="w-full md:max-w-[55%]">
            <div className="mb-3 flex items-center gap-5">
              <span className="font-[var(--font-barlow)] text-2xl font-black italic">
                GALLERY
              </span>
              <div className="h-[2px] flex-1 bg-[#F3F0E9]/70" />
            </div>

            <h2 className="font-[var(--font-barlow)] text-[clamp(48px,7vw,88px)] font-black italic uppercase leading-[0.9]">
              INSIDE OUR{" "}
              <span className="inline-block -rotate-2 bg-[#C6FF00] px-3 text-[#171717]">
                GYM.
              </span>
            </h2>
          </div>

          <div className="flex items-center justify-between gap-6 md:max-w-[390px]">
            <p className="font-[var(--font-inter)] text-sm leading-7 text-white/70 md:text-base">
              A glimpse of our training space, equipment and the community
              that makes Muscle Monk special.
            </p>

            <div className="flex shrink-0 -skew-x-[25deg] gap-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-12 w-3 bg-[#C6FF00] md:h-14 md:w-4"
                />
              ))}
            </div>
          </div>

        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-[240px_240px] lg:grid-cols-3 lg:grid-rows-[280px_220px]">

          {previewImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative min-h-[230px] overflow-hidden border-[3px] border-[#F3F0E9] bg-[#252525] ${image.className} ${
                index === 0 ? "lg:row-span-2" : ""
              }`}
              style={{
                clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-transparent" />
            </div>
          ))}

        </div>

        {/* Explore Button */}
        <div className="mt-10 flex items-center justify-center gap-5 md:mt-14">

          <div className="hidden h-[2px] flex-1 bg-white/60 md:block" />

          <Link
            href="/gallery"
            className="group flex -skew-x-6 items-center gap-4 border-2 border-[#171717] bg-[#FF503D] px-7 py-4 font-[var(--font-barlow)] text-xl font-black italic text-[#171717] shadow-[5px_5px_0_#F3F0E9] transition hover:-translate-y-1 hover:shadow-[5px_8px_0_#F3F0E9] md:px-10 md:text-3xl"
          >
            <span className="skew-x-6">EXPLORE OUR GYM</span>
            <span className="skew-x-6 text-3xl transition-transform group-hover:translate-x-2">
              ↗
            </span>
          </Link>

          <div className="hidden h-[2px] flex-1 bg-white/60 md:block" />

        </div>

      </div>

      {/* Decorative accents */}
      <div className="pointer-events-none absolute -bottom-8 -left-5 h-12 w-64 -rotate-6 bg-[#C6FF00]" />
      <div className="pointer-events-none absolute -bottom-10 -right-5 h-14 w-72 -rotate-6 bg-[#FF503D]" />

    </section>
  );
}
