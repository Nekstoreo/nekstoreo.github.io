"use client"; // Framer Motion components are client-side

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional delay for staggering
  staggerChildren?: number; // Optional stagger for children
  direction?: 'up' | 'down' | 'left' | 'right'; // Optional slide direction
  once?: boolean; // Whether the animation should play only once
  amount?: number | 'some' | 'all'; // How much of the element needs to be in view
  tag?: keyof HTMLElementTagNameMap; // Allow specifying the HTML tag
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  className,
  delay = 0,
  staggerChildren,
  direction = 'up',
  once = true,
  amount = 0.2,
  tag = 'div', // Default to div
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'up': return { y: 20 };
      case 'down': return { y: -20 };
      case 'left': return { x: -20 };
      case 'right': return { x: 20 };
      default: return { y: 20 };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialOffset(),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6, // Slightly increased duration for smoother feel
        ease: 'easeInOut',
        delay: delay,
        ...(staggerChildren && { staggerChildren }), // Apply staggerChildren if provided
      },
    },
  };

  const MotionComponent = motion[tag] || motion.div;


  return (
    <MotionComponent
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, amount: amount }}
    >
      {children}
    </MotionComponent>
  );
};

export default ScrollFadeIn;
