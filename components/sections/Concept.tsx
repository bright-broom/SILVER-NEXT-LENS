'use client';

import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';
import { concept } from '@/lib/content';

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
            {concept.title.line1}
            <br />
            <Highlight className="text-black dark:text-white">
              {concept.title.line2}
            </Highlight>
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            {concept.description.line1}
            <br />
            {concept.description.line2}
          </p>
        </motion.div>
      </HeroHighlight>
    </section>
  );
}
