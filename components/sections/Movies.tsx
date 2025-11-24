'use client';

import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import { movies as moviesContent } from '@/lib/content';
import { MOVIE_IMAGES } from '@/lib/assets';

const images = [...MOVIE_IMAGES];

export default function Movies() {
  return (
    <SectionWrapper padding="lg">
      <SectionHeader
        title={moviesContent.title}
        description={moviesContent.description}
      />

      <div className="mt-8">
        <ParallaxScrollSecond images={images} />
      </div>
    </SectionWrapper>
  );
}
