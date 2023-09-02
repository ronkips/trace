import { Hero } from "@/components/LandingSection";
import About from "@/components/LandingSection/AboutSection";
import Producer from "@/components/LandingSection/ProducerNft";
import Roadmap from "@/components/LandingSection/RoadmapSection";
import YouTubeSection from "@/components/LandingSection/VideoSection";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/footer/Footer";
import SharedLayout from "@/layout/SharedLayout";

export default function Home() {
  return (
    <SharedLayout
      title="Trace"
      description="trace"
      key={0}
      Navbar={<Navbar />}
      Footer={<Footer />}
    >
      <Hero />
      <About />
      <YouTubeSection />
      <Producer />
      <Roadmap />
    </SharedLayout>
  );
}
