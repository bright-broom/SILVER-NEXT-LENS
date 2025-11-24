'use client';

import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';
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
      <Card className={`h-full bg-white/50 dark:bg-black/50 hover:shadow-lg transition-shadow ${className || ''}`}>
        <CardHeader>
          <Icon className="w-12 h-12 text-primary mb-4" />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </AnimatedCard>
  );
}

