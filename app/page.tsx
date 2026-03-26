import Hero from "./sections/Hero";
import Categories from "./sections/Categories";
import BestSellers from "./sections/BestSellers";
import WhyChooseUs from "./sections/WhyChooseUs";
import ParallaxSection from "./sections/ParallaxSection";
import MenuPreview from "./sections/MenuPreview";
import Testimonals from "./sections/Testimonals";
import Gallery from "./sections/Gallery";
import CTA from "./sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <BestSellers />
      <WhyChooseUs />
      <ParallaxSection />
      <MenuPreview />
      <Testimonals />
      <Gallery />
      <CTA />
    </main>
  );
}
