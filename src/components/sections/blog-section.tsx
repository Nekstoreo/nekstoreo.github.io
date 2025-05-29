'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const blogPosts = [
  {
    title: 'Building Scalable Microservices with ASP.NET Core',
    excerpt: 'A deep dive into designing and implementing microservices architecture that can scale to millions of users.',
    date: '2024-05-15',
    readTime: '8 min read',
    tags: ['ASP.NET Core', 'Microservices', 'Architecture'],
    slug: 'scalable-microservices-aspnet-core',
  },
  {
    title: 'Database Optimization: From Slow to Lightning Fast',
    excerpt: 'Learn how to identify performance bottlenecks and optimize database queries for maximum efficiency.',
    date: '2024-04-22',
    readTime: '6 min read',
    tags: ['PostgreSQL', 'Performance', 'Optimization'],
    slug: 'database-optimization-guide',
  },
  {
    title: 'Docker in Production: Lessons Learned',
    excerpt: 'Real-world experiences and best practices for running containerized applications at scale.',
    date: '2024-03-10',
    readTime: '10 min read',
    tags: ['Docker', 'DevOps', 'Production'],
    slug: 'docker-production-lessons',
  },
];

export function BlogSection() {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="blog" className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={elementRef as React.Ref<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            <span className="gradient-text">Recent</span>{' '}
            <span className="text-white">Articles</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Sharing insights, experiences, and technical deep-dives from the world of backend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.8, 
                delay: isVisible ? index * 0.1 : 0, 
                ease: 'easeOut' 
              }}
            >
              <Card className="glass-card hover:amber-glow transition-all duration-300 group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-amber-500/10 text-amber-400 rounded border border-amber-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-amber-400 hover:bg-amber-500/10 p-0 h-auto font-medium group"
                    onClick={() => {/* Navigate to blog post */}}
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-center"
        >
          <Button
            variant="outline"
            className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/50 px-8 py-3"
            onClick={() => {/* Navigate to full blog */}}
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
