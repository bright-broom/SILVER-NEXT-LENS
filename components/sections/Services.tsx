'use client';

import { Camera, Video, Briefcase, AirVent, Tv2, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { type Service } from './types';
import { services as servicesContent } from '@/lib/content';

const iconMap = {
  Video,
  Briefcase,
  Camera,
  AirVent,
  Tv2,
  Lightbulb,
} as const;

const services: Service[] = servicesContent.items.map((item, index) => {
  const icons = [Video, Briefcase, Camera, AirVent, Tv2, Lightbulb];
  return {
    icon: icons[index] || Video,
    title: item.title,
    description: item.description,
  };
});

export default function Services() {
  return (
    <SectionWrapper>
      <SectionHeader
        title={servicesContent.title}
        description={servicesContent.description}
      />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <Card className="h-full card-hover glass-card border-0 group">
                <CardHeader className="pb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-500"
                  >
                    <service.icon size={40} className="text-cyan-600 dark:text-cyan-400" />
                  </motion.div>
                  <CardTitle className="text-xl md:text-2xl mb-3 font-bold text-slate-800 dark:text-slate-100">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
          ))}
        </div>
    </SectionWrapper>
  );
}
