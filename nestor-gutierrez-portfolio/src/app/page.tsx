import HeroSection from "@/components/sections/HeroSection";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollFadeIn from "@/components/animations/ScrollFadeIn"; // Import the animation component

export default function Home() {
  return (
    <main>
      <HeroSection /> {/* HeroSection remains as is (above the fold) */}
      
      <ScrollFadeIn amount={0.1}> {/* Trigger when 10% of the section is in view */}
        <ProjectsGallery />
      </ScrollFadeIn>
      
      <ScrollFadeIn amount={0.1} delay={0.1}> 
        <SkillsSection />
      </ScrollFadeIn>
      
      <ScrollFadeIn amount={0.1} delay={0.2}> {/* Increased delay */}
        <AboutMeSection />
      </ScrollFadeIn>
      
      <ScrollFadeIn amount={0.1} delay={0.3}> {/* Increased delay */}
        <BlogSection />
      </ScrollFadeIn>
      
      <ScrollFadeIn amount={0.1} delay={0.4}> {/* Increased delay */}
        <ContactSection />
      </ScrollFadeIn>
    </main>
  );
}
