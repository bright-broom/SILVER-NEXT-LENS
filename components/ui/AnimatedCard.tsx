'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animationType?: 'fadeUp' | 'fade' | 'scale';
}

const animationVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

function AnimatedCard({
  children,
  delay = 0,
  className,
  animationType = 'fadeUp',
}: AnimatedCardProps) {
  const variants = useMemo(() => animationVariants[animationType], [animationType]);
  const transition = useMemo(() => ({ duration: 0.5, delay }), [delay]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={transition}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export default memo(AnimatedCard);

