'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function ContactSection() {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={elementRef as React.Ref<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            <span className="gradient-text">Get</span>{' '}
            <span className="text-white">In Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss backend architecture? 
            Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-amber-400 mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-amber-500/50 focus:ring-amber-500/25"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-amber-500/50 focus:ring-amber-500/25"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-amber-500/50 focus:ring-amber-500/25 resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full amber-glow bg-amber-500 hover:bg-amber-600 text-black font-medium py-3 rounded-lg transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-amber-400 mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I&apos;m always interested in discussing new opportunities, 
                collaborating on exciting projects, or simply talking about 
                the latest trends in backend development.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:nestor@example.com"
                  className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-amber-500/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-400">nestor@example.com</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/Nekstoreo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-amber-500/20 transition-colors duration-300">
                    <Github className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-gray-400">@Nekstoreo</p>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/nestorgutierrez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-amber-500/20 transition-colors duration-300">
                    <Linkedin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-gray-400">Nestor Gutierrez</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
