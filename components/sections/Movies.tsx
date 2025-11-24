'use client';

import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import { movies as moviesContent } from '@/lib/content';

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
        title={moviesContent.title}
        description={moviesContent.description}
      />

      <ParallaxScrollSecond images={images} />
    </SectionWrapper>
  );
}
