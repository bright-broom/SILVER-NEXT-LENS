'use client';

import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { type Client } from './types';

const clients: Client[] = [
  { name: 'NHK', logo: '/images/logo/NHK_logo.webp' },
  { name: '日本テレビ', logo: '/images/logo/nittere.webp' },
  { name: 'TBSテレビ', logo: '/images/logo/tbs.webp' },
  { name: 'テレビ朝日', logo: '/images/logo/asahi.webp' },
  { name: '関西テレビ', logo: '/images/logo/kantere.webp' },
  { name: 'テレビ東京', logo: '/images/logo/teretou.webp' },
  { name: 'テレビ大阪', logo: '/images/logo/tvosaka.webp' },
  { name: 'サンテレビ', logo: '/images/logo/santv.webp' },
  { name: 'エルマガジン社', logo: '/images/logo/erumaga.webp' },
  { name: 'ポニーキャニオン', logo: '/images/logo/poni.webp' },
  { name: 'ブースタープロジェクト', logo: '/images/logo/busuta.webp' },
  { name: '電通クリエーティブX', logo: '/images/logo/dentsu.webp' },
  { name: '農林水産省', logo: '/images/logo/nourin.webp' },
  { name: '兵庫県', logo: '/images/logo/hyougoken.webp' },
  { name: '南あわじ市', logo: '/images/logo/minami.webp' },
  { name: '洲本市', logo: '/images/logo/sumoto.webp' },
  { name: '南あわじ市商工会', logo: '/images/logo/minami.webp' },
  { name: '淡路市商工会', logo: '/images/logo/awajisyoukoukai.webp' },
  { name: 'パソナグループ', logo: '/images/logo/pasona.webp' },
];

import { clients as clientsContent } from '@/lib/content';

export default function Clients() {
  return (
    <SectionWrapper>
      <SectionHeader
        title={clientsContent.title}
        description={clientsContent.description}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
        {clients.map((client, index) => (
          <AnimatedCard
            key={index}
            delay={index * 0.05}
            className="flex items-center justify-center p-4 md:p-6 rounded-lg shadow-sm card-hover bg-white/50 dark:bg-black/50"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={60}
              className="object-contain w-full h-auto max-w-[120px]"
            />
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
