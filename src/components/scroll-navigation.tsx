'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { id: 'hero', label: 'Inicio' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'about', label: 'Acerca de' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contacto' },
];

export function ScrollNavigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 500);

      // Determinar la sección activa
      const sections = navigationItems.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            top: rect.top + scrollY,
            bottom: rect.bottom + scrollY,
          };
        }
        return null;
      }).filter(Boolean);

      const currentSection = sections.find(section => {
        if (section) {
          return scrollY >= section.top - 100 && scrollY < section.bottom - 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar inmediatamente

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Navegación lateral */}
      <motion.nav
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex flex-col space-y-4">
          {navigationItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex items-center justify-end transition-all duration-300 ${
                activeSection === item.id ? 'scale-110' : 'hover:scale-105'
              }`}
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className={`absolute right-8 px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-amber-500/20 text-amber-400 opacity-100'
                    : 'bg-gray-800/80 text-gray-400 opacity-0 group-hover:opacity-100'
                } backdrop-blur-sm`}
              >
                {item.label}
              </span>
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-amber-500 border-amber-500 shadow-lg shadow-amber-500/50'
                    : 'bg-transparent border-gray-600 group-hover:border-amber-400'
                }`}
              />
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Botón scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            className="fixed bottom-8 right-8 z-40"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={scrollToTop}
              size="sm"
              className="bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 text-amber-400 rounded-full p-3 backdrop-blur-sm"
            >
              <ChevronUp className="w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
