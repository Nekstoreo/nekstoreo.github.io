import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Send } from 'lucide-react'; // Icons

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-neutral-900/30 dark:bg-neutral-950/50"> {/* Subtle background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-foreground tracking-tight">
          Get In Touch
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start"> {/* items-start for alignment if columns have different natural heights */}
          {/* Column 1: Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-amber-400/90 mb-1">Send a Message</h3>
            <p className="text-sm text-foreground/70 mb-6">
              Feel free to reach out with any questions or opportunities!
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground/80 text-sm">Name</Label> {/* Added text-sm to labels */}
                <Input type="text" id="name" placeholder="Your Name" className="mt-2 bg-slate-800/50 dark:bg-slate-900/70 border-slate-700/60 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground/80 text-sm">Email</Label>
                <Input type="email" id="email" placeholder="your.email@example.com" className="mt-2 bg-slate-800/50 dark:bg-slate-900/70 border-slate-700/60 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground/80 text-sm">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} className="mt-2 bg-slate-800/50 dark:bg-slate-900/70 border-slate-700/60 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div>
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold focus:ring-amber-400"
                  size="lg"
                >
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </div>

          {/* Column 2: Alternative Contact Methods */}
          <div className="space-y-6 md:pt-[4.25rem]"> {/* Adjusted pt to align with the form's first input field roughly */}
             <h3 className="text-2xl font-semibold text-amber-400/90 mb-1">Connect With Me</h3>
             <p className="text-sm text-foreground/70 mb-6">
              Alternatively, you can find me on these platforms:
            </p>
            <a 
              href="https://github.com/Nekstoreo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-3 p-4 bg-slate-800/40 dark:bg-slate-900/60 rounded-lg shadow-sm hover:bg-slate-700/50 dark:hover:bg-slate-800/70 transition-colors duration-200 group" // Increased padding
            >
              <Github className="w-6 h-6 text-amber-400/80 group-hover:text-amber-400 transition-colors" />
              <span className="text-foreground/80 group-hover:text-foreground/95">github.com/Nekstoreo</span>
            </a>
            <a 
              href="#" // Placeholder LinkedIn URL
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-3 p-4 bg-slate-800/40 dark:bg-slate-900/60 rounded-lg shadow-sm hover:bg-slate-700/50 dark:hover:bg-slate-800/70 transition-colors duration-200 group"
            >
              <Linkedin className="w-6 h-6 text-amber-400/80 group-hover:text-amber-400 transition-colors" />
              <span className="text-foreground/80 group-hover:text-foreground/95">Nestor Gutierrez on LinkedIn</span>
            </a>
            <a 
              href="mailto:nestor.gutierrez.dev@example.com" 
              className="flex items-center space-x-3 p-4 bg-slate-800/40 dark:bg-slate-900/60 rounded-lg shadow-sm hover:bg-slate-700/50 dark:hover:bg-slate-800/70 transition-colors duration-200 group"
            >
              <Mail className="w-6 h-6 text-amber-400/80 group-hover:text-amber-400 transition-colors" />
              <span className="text-foreground/80 group-hover:text-foreground/95">nestor.gutierrez.dev@example.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
