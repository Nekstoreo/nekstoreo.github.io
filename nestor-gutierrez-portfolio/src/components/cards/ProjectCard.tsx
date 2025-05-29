import Image from 'next/image';

interface Project {
  id: number | string;
  name: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-slate-800/30 dark:bg-slate-900/50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out group hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 focus-within:ring-2 focus-within:ring-amber-500/70 focus-within:ring-offset-2 focus-within:ring-offset-black">
      {project.imageUrl && (
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-amber-400 transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-foreground/70 text-sm mb-4 min-h-[4em] line-clamp-3"> {/* Ensures consistent description height for ~3 lines */}
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-amber-400/10 text-amber-400/80 text-xs font-medium px-3 py-1 rounded-full group-hover:bg-amber-400/20 group-hover:text-amber-300/90 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
