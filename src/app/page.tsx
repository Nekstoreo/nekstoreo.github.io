import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { AboutSection } from '@/components/sections/about-section';
import { BlogSection } from '@/components/sections/blog-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ScrollReveal } from '@/components/scroll-reveal';
import { ScrollNavigation } from '@/components/scroll-navigation';

export default function Home() {
  return (
    <main className="relative w-full max-w-full overflow-x-hidden">
      <ScrollNavigation />
      
      {/* Hero Section - sin animación ya que está siempre visible */}
      <HeroSection />
      
      {/* Projects Section */}
      <ScrollReveal animation="slideUp" duration={0.8} threshold={0.2}>
        <ProjectsSection />
      </ScrollReveal>
      
      {/* Skills Section */}
      <ScrollReveal animation="slideInLeft" duration={0.8} delay={0.2} threshold={0.2}>
        <SkillsSection />
      </ScrollReveal>
      
      {/* About Section */}
      <ScrollReveal animation="fadeIn" duration={0.8} threshold={0.2}>
        <AboutSection />
      </ScrollReveal>
      
      {/* Blog Section */}
      <ScrollReveal animation="slideInRight" duration={0.8} delay={0.1} threshold={0.2}>
        <BlogSection />
      </ScrollReveal>
      
      {/* Contact Section */}
      <ScrollReveal animation="zoomIn" duration={0.8} threshold={0.2}>
        <ContactSection />
      </ScrollReveal>
      
      {/* Footer */}
      <ScrollReveal animation="fadeIn" duration={0.6} threshold={0.3}>
        <footer className="py-12 section-padding border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2024 Nestor Gutierrez. Built with Next.js, TypeScript, and lots of ☕
            </p>
          </div>
        </footer>
      </ScrollReveal>
    </main>
  );
}
