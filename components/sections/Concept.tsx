'use client';

import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';
import { concept } from '@/lib/content';

export default function Concept() {
  return (
    <section id="concept" className="w-full relative">
      <HeroHighlight>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: [30, -8, 0],
          }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-center space-y-10 px-4"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-tight"
          >
            {concept.title.line1}
            <br />
            <Highlight className="gradient-text dark:text-cyan-400">
              {concept.title.line2}
            </Highlight>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            {concept.description.line1}
            <br />
            {concept.description.line2}
          </motion.p>
        </motion.div>
      </HeroHighlight>
    </section>
  );
}
