'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Code, Coffee } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Image from 'next/image';

const timeline = [
  {
    year: '2024',
    role: 'Senior Backend Developer',
    company: 'TechCorp Solutions',
    description: 'Leading backend architecture for high-traffic applications. Implemented microservices that handle 10M+ requests daily.',
    icon: Code,
  },
  {
    year: '2022',
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    description: 'Built scalable web applications from the ground up. Reluctantly became the frontend person when needed.',
    icon: Coffee,
  },
  {
    year: '2020',
    role: 'Backend Developer',
    company: 'Innovation Labs',
    description: 'Specialized in API development and database optimization. Reduced query response times by 70%.',
    icon: Code,
  },
];

export function AboutSection() {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-16 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={elementRef as React.Ref<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            <span className="gradient-text">About</span>{' '}
            <span className="text-white">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Backend developer by passion, frontend developer by necessity. 
            Building robust systems that power amazing user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-6"
          >
            {/* Profile Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="glass-card p-6 rounded-lg mb-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 blur-lg scale-110"></div>
                  <Image
                    src="https://avatars.githubusercontent.com/u/97989097?v=4"
                    alt="Nestor Gutierrez - Backend Developer"
                    width={100}
                    height={100}
                    className="relative rounded-full border-2 border-amber-400/30 shadow-xl shadow-amber-500/10"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Nestor Gutierrez
                </h3>
                <p className="text-amber-400 mb-2">@Nekstoreo</p>
                <p className="text-gray-400 text-sm">
                  Backend Developer / Reluctant Frontender
                </p>
              </div>
            </motion.div>

            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">
                Professional Overview
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                With over 4 years of experience in backend development, I specialize in 
                creating scalable, maintainable systems that can handle millions of users. 
                My expertise spans from monolithic applications to distributed microservices 
                architectures.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                While my heart belongs to backend development, I&apos;ve learned to navigate 
                the frontend waters when projects demand it. This full-stack perspective 
                helps me build better APIs and understand the complete user journey.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                <div className="flex items-center text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-amber-400" />
                  <span>Remote</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2 text-amber-400" />
                  <span>Available</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-amber-400 mb-6">
              Experience Timeline
            </h3>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.6, 
                  delay: isVisible ? 0.6 + (index * 0.1) : 0,
                  ease: 'easeOut' 
                }}
                className="glass-card p-4 rounded-lg hover:amber-glow transition-all duration-300 relative"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mr-3">
                    <item.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base font-semibold text-white">
                        {item.role}
                      </h4>
                      <span className="text-xs text-amber-400 font-medium">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-amber-300 font-medium mb-2 text-sm">
                      {item.company}
                    </p>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
