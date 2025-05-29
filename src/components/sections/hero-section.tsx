'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
            <span className="gradient-text">Nestor</span>{' '}
            <span className="text-white">Gutierrez</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              <span className="text-amber-400">@Nekstoreo</span>
            </p>
            <p className="text-lg md:text-xl text-gray-400 italic">
              Backend Developer / Reluctant Frontender
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Crafting robust backend systems with occasional forays into the mysterious realm 
            of frontend development. Building scalable solutions with ASP.NET Core, Node.js, 
            and modern cloud technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="amber-glow bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-3 rounded-lg transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/50 px-8 py-3 rounded-lg transition-all duration-300"
              onClick={() => window.open('https://github.com/Nekstoreo', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-amber-400/70 cursor-pointer"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm mb-2 tracking-wide">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
