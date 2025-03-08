/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 静的エクスポート (SSG) を有効化
  eslint: {
    ignoreDuringBuilds: true, // ビルド時の ESLint エラーを無視
  },
  images: {
    unoptimized: true, // 静的エクスポート時に Next.js の画像最適化を無効化
  },
  experimental: {
    appDocumentPreloading: true, // 代わりにサポートされているオプションを指定
  },
}

module.exports = nextConfig