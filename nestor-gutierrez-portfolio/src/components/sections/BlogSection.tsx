import React from 'react';
import Link from 'next/link';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // Add imports

const placeholderPosts = [
  {
    id: 1,
    title: "The Future of Backend Development",
    date: "October 26, 2023",
    excerpt: "A quick look into emerging trends in backend technologies, exploring how serverless, edge computing, and AI are shaping the future of application architecture...",
    slug: "future-backend-development",
  },
  {
    id: 2,
    title: "Navigating Microservices: A Pragmatic Approach",
    date: "September 15, 2023",
    excerpt: "Microservices offer scalability and flexibility, but also complexity. This post discusses practical strategies for designing, deploying, and managing microservices effectively.",
    slug: "navigating-microservices-pragmatic-approach",
  },
  {
    id: 3,
    title: "My Journey with Cloud Platforms: GCP vs AWS vs Azure",
    date: "August 02, 2023",
    excerpt: "Sharing personal experiences and insights gained from working with major cloud providers, highlighting their strengths, weaknesses, and ideal use cases.",
    slug: "journey-cloud-platforms-gcp-aws-azure",
  },
];

// Define variants for the blog post list container
const listContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger delay between blog posts
    },
  },
};

// Define variants for individual blog post articles
const articleVariants: Variants = {
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

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-neutral-900/10 dark:bg-neutral-950/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-foreground tracking-tight">
          Latest Musings
        </h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-10"
          variants={listContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {placeholderPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={articleVariants}
              className="p-6 bg-slate-800/20 dark:bg-slate-900/40 rounded-lg shadow-sm hover:bg-slate-800/40 dark:hover:bg-slate-900/60 transition-colors duration-300 group"
            >
              <header className="mb-3">
                <h3 className="text-2xl md:text-3xl font-semibold text-amber-400/90 group-hover:text-amber-400 transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`} legacyBehavior={false}>
                    <a className="hover:underline focus:outline-none focus:ring-1 focus:ring-amber-400/50 rounded-sm">
                      {post.title}
                    </a>
                  </Link>
                </h3>
                <div className="flex items-center text-xs text-foreground/60 mt-2 space-x-2">
                  <CalendarDays className="w-3.5 h-3.5 text-amber-500/60" />
                  <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                </div>
              </header>
              <div className="text-sm text-foreground/70 leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </div>
              <footer className="text-right">
                <Link href={`/blog/${post.slug}`} legacyBehavior={false}>
                  <a className="inline-flex items-center text-sm text-amber-400/80 hover:text-amber-400 group-hover:underline focus:outline-none focus:ring-1 focus:ring-amber-400/50 rounded-sm transition-colors duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </Link>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
