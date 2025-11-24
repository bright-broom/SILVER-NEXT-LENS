'use client';

import { memo, useMemo } from 'react';
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
  'sm': 'py-16 sm:py-20 md:py-24',
  'md': 'py-20 sm:py-24 md:py-32 lg:py-40',
  'lg': 'py-24 sm:py-32 md:py-40 lg:py-48',
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function SectionWrapper({
  children,
  className,
  contentClassName,
  gradient = 'gradient-1',
  padding = 'md',
  animationDelay = 0,
}: SectionWrapperProps) {
  const sectionClassName = useMemo(
    () => cn('section-base', gradientClasses[gradient], paddingClasses[padding], className),
    [gradient, padding, className]
  );

  const transition = useMemo(() => ({ duration: 0.8, delay: animationDelay }), [animationDelay]);

  return (
    <section className={sectionClassName}>
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={transition}
          variants={defaultVariants}
          className={cn(contentClassName)}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(SectionWrapper);

