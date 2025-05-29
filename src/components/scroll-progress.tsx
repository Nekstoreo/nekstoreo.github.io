'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-amber-500/20 z-50"
      initial={{ scaleX: 0 }}
      style={{ transformOrigin: '0%' }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
        style={{ 
          scaleX: scrollProgress / 100,
          transformOrigin: '0%'
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      />
    </motion.div>
  );
}
