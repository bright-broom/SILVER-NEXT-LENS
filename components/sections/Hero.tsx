"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import styles from "./Hero.module.css"

// =============================
// 動画背景コンポーネント
// 全デバイス対応のフルスクリーン化
// =============================
const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <iframe
        title="Background video"
        src="https://player.vimeo.com/video/667542636?autoplay=1&loop=1&muted=1&background=1"
        className={`absolute inset-0 w-full h-full border-none ${styles.videoBackground}`}
        allow="autoplay; fullscreen"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  )
}

// =============================
// スクロールインジケーターコンポーネント
// =============================
const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
    >
      <ChevronDown size={32} />
    </motion.div>
  )
}

// =============================
// ヒーローセクションコンポーネント
// =============================
export default function Hero() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <VideoBackground />
      <ScrollIndicator />
    </section>
  )
}