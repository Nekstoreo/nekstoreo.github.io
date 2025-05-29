import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { AboutSection } from '@/components/sections/about-section';
import { BlogSection } from '@/components/sections/blog-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Blog Section */}
      <BlogSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 section-padding border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Nestor Gutierrez. Built with Next.js, TypeScript, and lots of ☕
          </p>
        </div>
      </footer>
    </main>
  );
}
