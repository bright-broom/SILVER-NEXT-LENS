import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Hero from '@/components/sections/Hero';

const Concept = dynamic(() => import('@/components/sections/Concept'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Services = dynamic(() => import('@/components/sections/Services'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Video = dynamic(() => import('@/components/sections/Video'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Movies = dynamic(() => import('@/components/sections/Movies'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Team = dynamic(() => import('@/components/sections/Team'), {
  loading: () => <div className="min-h-[400px]" />,
});
const History = dynamic(() => import('@/components/sections/History'), {
  loading: () => <div className="min-h-[400px]" />,
});
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Clients = dynamic(() => import('@/components/sections/Clients'), {
  loading: () => <div className="min-h-[400px]" />,
});
const News = dynamic(() => import('@/components/sections/News'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Footer = dynamic(() => import('@/components/sections/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
});

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden antialiased">
      <Hero />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <Concept />
        <Services />
        <Video />
        <Movies />
        <Team />
        <History />
        <About />
        <Clients />
        <News />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}