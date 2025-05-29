'use client';

import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StaggeredReveal } from '@/components/staggered-reveal';

const projects = [
  {
    title: 'E-Commerce Microservices',
    description: 'Scalable microservices architecture for an e-commerce platform built with ASP.NET Core, Docker, and PostgreSQL. Implements event-driven architecture with message queues.',
    tech: ['ASP.NET Core', 'Docker', 'PostgreSQL', 'RabbitMQ', 'Redis'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'High-performance analytics dashboard processing millions of events per hour. Built with Node.js, WebSockets, and time-series databases.',
    tech: ['Node.js', 'WebSockets', 'InfluxDB', 'React', 'D3.js'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Infrastructure as Code solution for multi-cloud deployment using Terraform and Kubernetes. Automated CI/CD pipelines with zero-downtime deployments.',
    tech: ['Terraform', 'Kubernetes', 'AWS', 'Azure', 'GitHub Actions'],
    github: '#',
    demo: '#',
  },
  {
    title: 'API Gateway & Auth Service',
    description: 'Centralized authentication and authorization service with rate limiting, request transformation, and comprehensive logging for microservices ecosystem.',
    tech: ['Node.js', 'JWT', 'Redis', 'OpenAPI', 'Express'],
    github: '#',
    demo: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            <span className="gradient-text">Featured</span>{' '}
            <span className="text-white">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of backend systems and full-stack applications that showcase 
            scalability, performance, and modern development practices.
          </p>
        </div>

        <StaggeredReveal
          animation="slideUp"
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover:amber-glow transition-all duration-300 group cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/50"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggeredReveal>
      </div>
    </section>
  );
}
