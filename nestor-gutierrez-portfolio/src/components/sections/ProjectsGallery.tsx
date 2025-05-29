import ProjectCard from '@/components/cards/ProjectCard';
import { motion, Variants } from 'framer-motion'; // Add imports

const placeholderProjects = [
  {
    id: 1,
    name: "Project Alpha",
    description: "A sophisticated e-commerce platform with advanced analytics and a sleek user interface, built for scalability and performance under high traffic.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS", "Redis"],
    imageUrl: "https://via.placeholder.com/600x400/0A0A0A/FFB300?text=Project+Alpha",
  },
  {
    id: 2,
    name: "Service Orchestrator Beta",
    description: "A microservices-based backend system designed to manage complex workflows and data processing pipelines efficiently using event-driven architecture.",
    techStack: ["Python", "FastAPI", "RabbitMQ", "Kubernetes", "Prometheus", "gRPC"],
    imageUrl: "https://via.placeholder.com/600x400/0A0A0A/FFB300?text=Service+Beta",
  },
  {
    id: 3,
    name: "DevOps Dashboard Gamma",
    description: "A real-time monitoring dashboard for CI/CD pipelines and infrastructure health, providing actionable insights and automated alerts for ops teams.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Grafana", "Socket.io"],
    imageUrl: "https://via.placeholder.com/600x400/0A0A0A/FFB300?text=Dashboard+Gamma",
  },
  {
    id: 4,
    name: "AI Chatbot Epsilon",
    description: "An intelligent chatbot leveraging NLP models to provide customer support and automate responses across multiple communication channels.",
    techStack: ["Python", "Flask", "Dialogflow", "Firebase", "Docker"],
    // No imageUrl for this one to test fallback in ProjectCard
  },
];

// Define variants for the container (grid)
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Stagger delay between cards
    },
  },
};

// Define variants for individual project cards
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export default function ProjectsGallery() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-neutral-900/30 dark:bg-neutral-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 text-foreground tracking-tight">
          Featured Work
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the grid is in view
        >
          {placeholderProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
