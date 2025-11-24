'use client';

import { motion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  gradient?: 'gradient-1' | 'gradient-2' | 'none';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  animationDelay?: number;
}

const gradientClasses = {
  'gradient-1': 'section-gradient-1',
  'gradient-2': 'section-gradient-2',
  'none': '',
};

const paddingClasses = {
  'none': '',
  'sm': 'py-12',
  'md': 'py-24',
  'lg': 'py-32',
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionWrapper({
  children,
  className,
  contentClassName,
  gradient = 'gradient-1',
  padding = 'md',
  animationDelay = 0,
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        'section-base',
        gradientClasses[gradient],
        paddingClasses[padding],
        className
      )}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: animationDelay }}
          variants={defaultVariants}
          className={cn(contentClassName)}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

