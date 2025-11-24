'use client';

import { memo, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { type Client } from './types';
import { clients as clientsContent } from '@/lib/content';
import { CLIENT_LOGOS } from '@/lib/assets';

const clients: Client[] = CLIENT_LOGOS;

const ClientLogo = memo(({ client, index }: { client: Client; index: number }) => (
  <AnimatedCard
    key={index}
    delay={index * 0.05}
    className="flex items-center justify-center p-6 md:p-8 rounded-2xl glass-card border-0 group"
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="grayscale group-hover:grayscale-0 transition-all duration-500"
    >
      <Image
        src={client.logo}
        alt={client.name}
        width={120}
        height={60}
        className="object-contain w-full h-auto max-w-[120px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        loading="lazy"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
      />
    </motion.div>
  </AnimatedCard>
));

ClientLogo.displayName = 'ClientLogo';

function Clients() {
  const clientLogos = useMemo(
    () => clients.map((client, index) => <ClientLogo key={index} client={client} index={index} />),
    []
  );

  return (
    <SectionWrapper>
      <SectionHeader
        title={clientsContent.title}
        description={clientsContent.description}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
        {clientLogos}
      </div>
    </SectionWrapper>
  );
}

export default memo(Clients);
