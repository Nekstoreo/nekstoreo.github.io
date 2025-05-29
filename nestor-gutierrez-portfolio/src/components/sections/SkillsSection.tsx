import React from 'react';
import SkillItem from '@/components/ui/SkillItem';
import { motion, Variants } from 'framer-motion'; // Add imports

const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "ASP.NET Core", iconName: "DotNet" },
      { name: "Node.js", iconName: "NodeJs" },
      { name: "Next.js (as backend)", iconName: "NextJs" },
    ],
  },
  {
    category: "DevOps / Cloud Platforms",
    skills: [
      { name: "Docker", iconName: "Docker" },
      { name: "Linux", iconName: "Linux" },
      { name: "Google Cloud Platform", iconName: "GCP" },
      { name: "AWS", iconName: "AWS" },
      { name: "Azure", iconName: "Azure" },
    ],
  },
  {
    category: "Databases",
    skills: [{ name: "PostgreSQL", iconName: "PostgreSQL" }],
  },
  {
    category: "Others",
    skills: [
      { name: "Git", iconName: "Git" },
      { name: "CI/CD pipelines", iconName: "CI/CD pipelines" },
      { name: "REST APIs", iconName: "REST APIs" },
      { name: "Microservices architecture", iconName: "Microservices architecture" },
    ],
  },
];

// Define variants for the skill item grid container
const gridContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07, // Slightly faster stagger for skills
    },
  },
};

// Define variants for individual skill items
const skillItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Slightly faster animation for smaller items
      ease: 'easeInOut',
    },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-neutral-900/10 dark:bg-neutral-950/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 text-foreground tracking-tight">
          Skills & Technologies
        </h2>
        <div className="space-y-12">
          {skillsData.map((categoryItem) => (
            <div key={categoryItem.category}>
              <motion.h3 
                className="text-2xl md:text-3xl font-semibold text-amber-400/90 mb-6 md:mb-8 tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }} // Added small delay
              >
                {categoryItem.category}
              </motion.h3>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4"
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} 
              >
                {categoryItem.skills.map((skill) => (
                  <motion.div key={skill.name} variants={skillItemVariants}>
                    <SkillItem name={skill.name} iconName={skill.iconName} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
