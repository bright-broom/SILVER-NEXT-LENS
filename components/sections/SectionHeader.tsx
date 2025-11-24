'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string | ReactNode;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn('text-center mb-16 sm:mb-20 md:mb-24', className)}>
      {typeof title === 'string' ? (
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className={cn(
            'text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10 tracking-tighter',
            'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-100 dark:via-slate-200 dark:to-slate-100',
            'bg-clip-text text-transparent',
            'drop-shadow-sm',
            titleClassName
          )}
          style={{ letterSpacing: '-0.02em' }}
        >
          {title}
        </motion.h2>
      ) : (
        <div className={cn('mb-8 sm:mb-10', titleClassName)}>{title}</div>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className={cn(
            'text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light',
            'drop-shadow-sm',
            descriptionClassName
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

