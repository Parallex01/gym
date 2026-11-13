import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import PricingPreview from "@/components/home/PricingPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <PricingPreview />
      <ServicesPreview />
      <GalleryPreview />
    </main>
  );
}