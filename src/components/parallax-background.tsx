'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Posiciones predefinidas para las partículas para evitar errores de hidratación
const PARTICLE_POSITIONS = [
  { left: 15, top: 25, duration: 4.2, delay: 0.3 },
  { left: 78, top: 12, duration: 5.1, delay: 1.2 },
  { left: 45, top: 67, duration: 3.8, delay: 0.7 },
  { left: 92, top: 34, duration: 4.7, delay: 1.8 },
  { left: 12, top: 89, duration: 5.3, delay: 0.1 },
  { left: 67, top: 45, duration: 4.1, delay: 1.5 },
  { left: 34, top: 78, duration: 4.9, delay: 0.9 },
  { left: 89, top: 56, duration: 3.6, delay: 1.1 },
  { left: 23, top: 12, duration: 5.2, delay: 0.4 },
  { left: 56, top: 91, duration: 4.4, delay: 1.7 },
  { left: 8, top: 67, duration: 3.9, delay: 0.2 },
  { left: 73, top: 29, duration: 4.8, delay: 1.4 },
  { left: 41, top: 83, duration: 5.0, delay: 0.8 },
  { left: 95, top: 18, duration: 3.7, delay: 1.9 },
  { left: 29, top: 54, duration: 4.3, delay: 0.6 },
];

export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden w-full max-w-full">
      {/* Partículas flotantes con posiciones predefinidas */}
      <motion.div
        className="absolute inset-0 w-full max-w-full"
        style={{
          y: scrollY * 0.1,
        }}
      >
        {PARTICLE_POSITIONS.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-500/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Capas de gradiente con parallax */}
      <motion.div
        className="absolute inset-0 opacity-30 w-full max-w-full"
        style={{
          y: scrollY * 0.2,
          background: `radial-gradient(ellipse 800px 600px at ${Math.min(Math.max(50 + scrollY * 0.01, 10), 90)}% ${Math.min(Math.max(20 + scrollY * 0.005, 10), 90)}%, rgba(255, 160, 0, 0.1) 0%, transparent 70%)`,
        }}
      />
      
      <motion.div
        className="absolute inset-0 opacity-20 w-full max-w-full"
        style={{
          y: scrollY * 0.15,
          background: `radial-gradient(ellipse 600px 400px at ${Math.min(Math.max(30 + scrollY * 0.008, 10), 90)}% ${Math.min(Math.max(80 + scrollY * 0.003, 10), 90)}%, rgba(255, 160, 0, 0.08) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
