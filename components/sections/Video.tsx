'use client';

import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import { video as videoContent } from '@/lib/content';

export default function Video() {
  return (
    <SectionWrapper gradient="none" className="bg-background" contentClassName="max-w-4xl mx-auto">
      <SectionHeader
        title={
          <>
            {videoContent.title.line1}
            <br />
            {videoContent.title.line2}
          </>
        }
      />

      <div className="space-y-12">
        <HeroVideoDialog
          animationStyle="from-center"
          videoSrc="https://youtu.be/h5RZmQVUu_o?si=oU32s78GNY41N389"
          thumbnailSrc="/images/movies/arino.webp"
          thumbnailAlt={videoContent.thumbnailAlt}
        />
      </div>
    </SectionWrapper>
  );
}
