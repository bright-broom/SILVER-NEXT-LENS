'use client';

import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AnimatedCard from './AnimatedCard';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ContactCard({
  icon: Icon,
  title,
  description,
  children,
  delay = 0,
  className,
}: ContactCardProps) {
  return (
    <AnimatedCard delay={delay}>
      <Card className={`h-full glass-card border-0 group ${className || ''}`}>
        <CardHeader className="pb-6">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-500"
          >
            <Icon className="w-14 h-14 text-cyan-600 dark:text-cyan-400" />
          </motion.div>
          <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            {title}
          </CardTitle>
          <CardDescription className="text-base text-slate-600 dark:text-slate-300">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">{children}</CardContent>
      </Card>
    </AnimatedCard>
  );
}

