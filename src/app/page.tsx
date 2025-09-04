import FeatureHeroSections from "./components/FeatureHeroSections";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import HeroSectionNew from "./components/HeroSectionNew";

// app/page.js
export const metadata = {
  title: "Tap - HR Management Software",
  description: "Tap - HR Management Software",
};

export default function Home() {

  return (
    <div>
      <HeroSectionNew />
      <FeatureHeroSections />
      <Footer />
      <FooterBottom />
    </div>
  );
}
