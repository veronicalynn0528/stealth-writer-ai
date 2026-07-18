import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32 pb-24 overflow-hidden">
        <HeroSection />
        <FeatureSection />
      </main>
      <Footer />
    </>
  );
}
