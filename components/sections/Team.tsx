'use client';

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import { type TeamMember } from './types';
import { team as teamContent } from '@/lib/content';

const teamMembers: TeamMember[] = teamContent.members.map((member, index) => ({
  ...member,
  src: index === 0 ? '/images/ginji2.webp' : '/images/tomoya.webp',
}));

export default function Team() {
  return (
    <SectionWrapper>
      <SectionHeader
        title={teamContent.title}
        description={teamContent.description}
      />

      <AnimatedTestimonials testimonials={teamMembers} />
    </SectionWrapper>
  );
}
