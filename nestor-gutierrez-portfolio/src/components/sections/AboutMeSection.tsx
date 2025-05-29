import React from 'react';
import { Briefcase, CalendarDays, Building } from 'lucide-react'; // Icons for experience

const professionalSummary = "A passionate backend developer with over 5 years of experience in building scalable and efficient applications. I enjoy tackling complex problems and continuously learning new technologies. While my core expertise lies in backend systems, I'm also comfortable navigating the frontend when needed to deliver complete solutions that drive business value and enhance user experience.";

const professionalExperience = [
  {
    id: 1,
    role: "Senior Backend Developer",
    company: "Innovatech Solutions Ltd.",
    duration: "Jan 2021 - Present",
    description: [
      "Led the architecture and development of a new suite of microservices, improving system modularity and scalability.",
      "Mentored junior developers, fostering a culture of growth and knowledge sharing within the team.",
      "Optimized database queries and caching strategies, resulting in a 30% reduction in API response times.",
    ],
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Future Systems Co.",
    duration: "Jun 2018 - Dec 2020",
    description: [
      "Developed and maintained RESTful APIs for various client projects using .NET Core and Node.js.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Contributed to the migration of a monolithic application to a microservices architecture.",
    ],
  },
];

export default function AboutMeSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-neutral-900/20 dark:bg-neutral-950/40"> {/* Subtle background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-12 text-foreground tracking-tight">
          My Journey
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-foreground/80 mb-12 md:mb-16 text-center leading-relaxed indent-8 sm:indent-12"> {/* Added indent for paragraph style */}
            {professionalSummary}
          </p>
          
          <h3 className="text-3xl md:text-4xl font-semibold text-amber-400/90 mb-10 md:mb-12 text-center tracking-wide">
            Professional Experience
          </h3>
          <div className="space-y-10">
            {professionalExperience.map((exp) => (
              <div 
                key={exp.id} 
                className="p-6 bg-slate-800/40 dark:bg-slate-900/60 rounded-lg shadow-md" // Updated background and shadow
              >
                <div className="flex items-start space-x-4 mb-3">
                  <Briefcase className="w-6 h-6 text-amber-400/80 mt-1 flex-shrink-0" />
                  <h4 className="text-xl md:text-2xl font-semibold text-foreground/95">
                    {exp.role}
                  </h4>
                </div>

                <div className="pl-10 space-y-2"> {/* Indent content under role title */}
                  <div className="flex items-center text-sm text-foreground/70 space-x-2">
                    <Building className="w-4 h-4 text-amber-400/70 flex-shrink-0" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center text-sm text-foreground/70 space-x-2">
                    <CalendarDays className="w-4 h-4 text-amber-400/70 flex-shrink-0" />
                    <span>{exp.duration}</span>
                  </div>

                  {exp.description && exp.description.length > 0 && (
                    <ul className="list-disc list-outside pl-5 pt-2 space-y-1 text-foreground/70 text-sm">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
