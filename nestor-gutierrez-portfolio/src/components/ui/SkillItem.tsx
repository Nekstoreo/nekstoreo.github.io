import React from 'react';
import { Cpu, Database, Cloud, GitMerge, TerminalSquare, Server, Cog, Network, Package, Code2 } from 'lucide-react'; // Using Code2 for more specific code icon

interface SkillItemProps {
  name: string;
  iconName?: string;
}

// A simple map for placeholder icon names to Lucide icons
// This can be expanded or made more sophisticated
const iconMap: { [key: string]: React.ElementType } = {
  DotNet: Code2,
  NodeJs: Code2,
  NextJs: Code2,
  Docker: Package,
  Linux: TerminalSquare,
  GCP: Cloud,
  AWS: Cloud,
  Azure: Cloud,
  PostgreSQL: Database, // More specific key
  Git: GitMerge, // More specific key
  "CI/CD pipelines": TerminalSquare, // Key matching data
  "REST APIs": Network,
  "Microservices architecture": Cog, // Using Cog for architecture
  Default: Cpu,
};

export default function SkillItem({ name, iconName }: SkillItemProps) {
  // Try to find a specific icon; if not, use the name itself (if it exists in map), or default
  const IconComponent = iconName && iconMap[iconName] ? iconMap[iconName] : (iconMap[name] || iconMap.Default);

  return (
    <div className="flex items-center space-x-3 p-3 bg-slate-800/40 dark:bg-slate-900/60 rounded-md shadow-sm hover:bg-slate-700/50 dark:hover:bg-slate-800/70 transition-colors duration-200 group">
      <IconComponent className="w-5 h-5 text-amber-400/80 flex-shrink-0 group-hover:text-amber-400 transition-colors duration-200" />
      <span className="text-foreground/80 text-sm group-hover:text-foreground/95 transition-colors duration-200">{name}</span>
    </div>
  );
}
