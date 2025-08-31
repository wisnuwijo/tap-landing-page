import FeatureHeroSections from "./components/FeatureHeroSections";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

// app/page.js
export const metadata = {
  title: "Tap - HR Management Software",
  description: "Tap - HR Management Software",
};

export default function Home() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureHeroSections />
      <Footer />
      <FooterBottom />
    </div>
  );
}
