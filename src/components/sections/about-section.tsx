'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Code, Coffee } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

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
    <section id="about" className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={elementRef as React.Ref<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            <span className="gradient-text">About</span>{' '}
            <span className="text-white">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Backend developer by passion, frontend developer by necessity. 
            Building robust systems that power amazing user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-amber-400 mb-6">
                Professional Overview
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With over 4 years of experience in backend development, I specialize in 
                creating scalable, maintainable systems that can handle millions of users. 
                My expertise spans from monolithic applications to distributed microservices 
                architectures.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                While my heart belongs to backend development, I&apos;ve learned to navigate 
                the frontend waters when projects demand it. This full-stack perspective 
                helps me build better APIs and understand the complete user journey.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-700">
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 text-amber-400" />
                  <span>Remote</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-5 h-5 mr-3 text-amber-400" />
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
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-amber-400 mb-8">
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
                className="glass-card p-6 rounded-lg hover:amber-glow transition-all duration-300 relative"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mr-4">
                    <item.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">
                        {item.role}
                      </h4>
                      <span className="text-sm text-amber-400 font-medium">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-amber-300 font-medium mb-2">
                      {item.company}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
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
