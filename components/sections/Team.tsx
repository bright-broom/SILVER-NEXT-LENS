'use client';

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import { type TeamMember } from './types';
import { team as teamContent } from '@/lib/content';
import { TEAM_IMAGES } from '@/lib/assets';

const teamMembers: TeamMember[] = teamContent.members.map((member, index) => ({
  ...member,
  src: index === 0 ? TEAM_IMAGES.ginji : TEAM_IMAGES.tomoya,
}));

export default function Team() {
  return (
    <SectionWrapper padding="lg">
      <SectionHeader
        title={teamContent.title}
        description={teamContent.description}
      />

      <div className="mt-12">
        <AnimatedTestimonials testimonials={teamMembers} />
      </div>
    </SectionWrapper>
  );
}
