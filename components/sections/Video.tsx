'use client';

import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import { video as videoContent } from '@/lib/content';
import { VIDEO_ASSETS } from '@/lib/assets';

export default function Video() {
  return (
    <SectionWrapper
      gradient="none"
      className="section-gradient-sky"
      contentClassName="max-w-5xl mx-auto"
    >
      <SectionHeader
        title={
          <>
            {videoContent.title.line1}
            <br />
            {videoContent.title.line2}
          </>
        }
      />

      <div className="space-y-16">
        <div className="elegant-shadow rounded-3xl overflow-hidden">
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc={VIDEO_ASSETS.main.youtubeUrl}
            thumbnailSrc={VIDEO_ASSETS.main.thumbnail}
            thumbnailAlt={videoContent.thumbnailAlt}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
