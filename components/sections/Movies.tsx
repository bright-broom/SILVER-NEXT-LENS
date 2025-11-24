'use client';

import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';

const images = [
  '/images/movies/movie1.webp',
  '/images/movies/movie2.webp',
  '/images/movies/movie3.webp',
  '/images/movies/movie4.webp',
  '/images/movies/movie5.webp',
  '/images/movies/movie6.webp',
  '/images/movies/movie7.webp',
  '/images/movies/movie8.webp',
  '/images/movies/movie9.webp',
  '/images/movies/movie10.webp',
  '/images/movies/movie11.webp',
  '/images/movies/movie12.webp',
];

export default function Movies() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="制作実績"
        description="ドローン空撮・映像制作の作品集"
      />

      <ParallaxScrollSecond images={images} />
    </SectionWrapper>
  );
}
