'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const skillCategories = [
  {
    category: 'Backend Development',
    skills: [
      'ASP.NET Core',
      'Node.js',
      'Next.js',
      'REST APIs',
      'Microservices',
      'GraphQL',
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      'Docker',
      'Kubernetes',
      'Linux',
      'Google Cloud',
      'AWS',
      'Azure',
    ],
  },
  {
    category: 'Databases',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'InfluxDB',
      'SQL Server',
      'MySQL',
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      'Git',
      'CI/CD',
      'Terraform',
      'RabbitMQ',
      'Nginx',
      'Monitoring',
    ],
  },
];

export function SkillsSection() {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={elementRef as React.Ref<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            <span className="gradient-text">Skills</span>{' '}
            <span className="text-white">& Technologies</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, maintainable, and high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.8, 
                delay: isVisible ? categoryIndex * 0.1 : 0, 
                ease: 'easeOut' 
              }}
              className="glass-card p-8 rounded-lg hover:amber-glow transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-amber-400 mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: isVisible ? (categoryIndex * 0.1) + (skillIndex * 0.05) : 0,
                      ease: 'easeOut' 
                    }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm md:text-base">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
