import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider label="SEC_02" />
        <AboutSection />
        <SectionDivider label="SEC_03" />
        <ProjectsSection />
        <SectionDivider label="SEC_04" />
        <ExperienceSection />
        <SectionDivider label="SEC_05" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
