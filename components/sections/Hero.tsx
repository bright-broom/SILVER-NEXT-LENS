'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';
import { HERO_ASSETS, getVimeoEmbedUrl } from '@/lib/assets';

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* オーバーレイグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />
      
      <iframe
        title="Background video"
        src={getVimeoEmbedUrl(HERO_ASSETS.backgroundVideo.vimeoId, {
          autoplay: true,
          loop: true,
          muted: true,
          background: true,
        })}
        className={`absolute inset-0 w-full h-full border-none ${styles.videoBackground}`}
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
      />
      
      {/* 追加のビジュアルエフェクト */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent z-10" />
    </div>
  );
};

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: [0, 12, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
    >
      <div className="flex flex-col items-center gap-2">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/90"
        >
          <ChevronDown size={32} strokeWidth={2.5} />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          className="text-xs text-white/70 font-medium tracking-wider uppercase"
        >
          Scroll
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <VideoBackground />
      <ScrollIndicator />
      
      {/* 装飾的な要素 */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0" />
    </section>
  );
}