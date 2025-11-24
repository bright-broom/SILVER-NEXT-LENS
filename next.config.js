/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'player.vimeo.com',
      },
      {
        protocol: 'https',
        hostname: '*.vimeo.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    appDocumentPreloading: true,
  },
  // 注意: 静的エクスポート（output: "export"）ではheadersは使用できません
  // セキュリティヘッダーはホスティングプロバイダー（Vercel、Netlifyなど）で設定するか、
  // またはoutput: "export"を削除してサーバーサイドで設定してください
};

module.exports = nextConfig;