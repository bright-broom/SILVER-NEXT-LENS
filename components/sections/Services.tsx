'use client';

import { Camera, Video, Briefcase, AirVent, Tv2, Lightbulb } from 'lucide-react';
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className="mb-4 text-primary">
                    <service.icon size={32} />
                  </div>
                  <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base">
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
