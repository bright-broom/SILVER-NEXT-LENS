'use client';

import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';

export default function Concept() {
  return (
    <section id="concept" className="w-full">
      <HeroHighlight>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-center space-y-8 px-4"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white">
            心を揺さぶる、<br />
            <Highlight className="text-black dark:text-white">唯一無二の映像体験。</Highlight>
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            淡路島の大自然を舞台に、非日常の感動と本質を捉えたストーリーを紡ぐ。<br />
            海、山、田園——息づく景色と空気感を映像に刻み、記憶に残る瞬間を創造する。
          </p>
        </motion.div>
      </HeroHighlight>
    </section>
  );
}
