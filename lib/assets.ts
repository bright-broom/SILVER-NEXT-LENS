/**
 * アプリケーション全体で使用する画像と動画のアセット管理
 * すべてのアセットパスはここで一元管理
 */

/**
 * 画像のベースパス
 */
const IMAGE_BASE_PATH = '/images';
const LOGO_BASE_PATH = `${IMAGE_BASE_PATH}/logo`;
const MOVIES_BASE_PATH = `${IMAGE_BASE_PATH}/movies`;
const NEWS_BASE_PATH = `${IMAGE_BASE_PATH}`;

/**
 * ヒーローセクション
 */
export const HERO_ASSETS = {
  backgroundVideo: {
    vimeoId: '667542636',
    url: 'https://player.vimeo.com/video/667542636?autoplay=1&loop=1&muted=1&background=1',
  },
} as const;

/**
 * チームメンバー画像
 */
export const TEAM_IMAGES = {
  ginji: `${IMAGE_BASE_PATH}/ginji2.webp`,
  tomoya: `${IMAGE_BASE_PATH}/tomoya.webp`,
} as const;

/**
 * クライアントロゴ
 */
export const CLIENT_LOGOS: Array<{ name: string; logo: string }> = [
  { name: 'NHK', logo: `${LOGO_BASE_PATH}/NHK_logo.webp` },
  { name: '日本テレビ', logo: `${LOGO_BASE_PATH}/nittere.webp` },
  { name: 'TBSテレビ', logo: `${LOGO_BASE_PATH}/tbs.webp` },
  { name: 'テレビ朝日', logo: `${LOGO_BASE_PATH}/asahi.webp` },
  { name: '関西テレビ', logo: `${LOGO_BASE_PATH}/kantere.webp` },
  { name: 'テレビ東京', logo: `${LOGO_BASE_PATH}/teretou.webp` },
  { name: 'テレビ大阪', logo: `${LOGO_BASE_PATH}/tvosaka.webp` },
  { name: 'サンテレビ', logo: `${LOGO_BASE_PATH}/santv.webp` },
  { name: 'エルマガジン社', logo: `${LOGO_BASE_PATH}/erumaga.webp` },
  { name: 'ポニーキャニオン', logo: `${LOGO_BASE_PATH}/poni.webp` },
  { name: 'ブースタープロジェクト', logo: `${LOGO_BASE_PATH}/busuta.webp` },
  { name: '電通クリエーティブX', logo: `${LOGO_BASE_PATH}/dentsu.webp` },
  { name: '農林水産省', logo: `${LOGO_BASE_PATH}/nourin.webp` },
  { name: '兵庫県', logo: `${LOGO_BASE_PATH}/hyougoken.webp` },
  { name: '南あわじ市', logo: `${LOGO_BASE_PATH}/minami.webp` },
  { name: '洲本市', logo: `${LOGO_BASE_PATH}/sumoto.webp` },
  { name: '南あわじ市商工会', logo: `${LOGO_BASE_PATH}/minami.webp` },
  { name: '淡路市商工会', logo: `${LOGO_BASE_PATH}/awajisyoukoukai.webp` },
  { name: 'パソナグループ', logo: `${LOGO_BASE_PATH}/pasona.webp` },
];

/**
 * 制作実績画像
 */
export const MOVIE_IMAGES = [
  `${MOVIES_BASE_PATH}/movie1.webp`,
  `${MOVIES_BASE_PATH}/movie2.webp`,
  `${MOVIES_BASE_PATH}/movie3.webp`,
  `${MOVIES_BASE_PATH}/movie4.webp`,
  `${MOVIES_BASE_PATH}/movie5.webp`,
  `${MOVIES_BASE_PATH}/movie6.webp`,
  `${MOVIES_BASE_PATH}/movie7.webp`,
  `${MOVIES_BASE_PATH}/movie8.webp`,
  `${MOVIES_BASE_PATH}/movie9.webp`,
  `${MOVIES_BASE_PATH}/movie10.webp`,
  `${MOVIES_BASE_PATH}/movie11.webp`,
  `${MOVIES_BASE_PATH}/movie12.webp`,
] as const;

/**
 * ビデオアセット
 */
export const VIDEO_ASSETS = {
  main: {
    youtubeId: 'h5RZmQVUu_o',
    youtubeUrl: 'https://youtu.be/h5RZmQVUu_o?si=oU32s78GNY41N389',
    thumbnail: `${MOVIES_BASE_PATH}/arino.webp`,
  },
  demo: {
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: `${IMAGE_BASE_PATH}/drone.webp`,
  },
} as const;

/**
 * ニュース画像
 */
export const NEWS_IMAGES = {
  news1: `${NEWS_BASE_PATH}/news1.webp`,
  news2: `${NEWS_BASE_PATH}/news2.webp`,
  news3: `${NEWS_BASE_PATH}/news3.webp`,
  news4: `${NEWS_BASE_PATH}/news4.webp`,
  news5: `${NEWS_BASE_PATH}/news5.webp`,
  news6: `${NEWS_BASE_PATH}/news6.webp`,
  news7: `${NEWS_BASE_PATH}/news7.webp`,
  news8: `${NEWS_BASE_PATH}/news8.webp`,
  news9: `${NEWS_BASE_PATH}/news9.webp`,
} as const;

/**
 * その他の画像
 */
export const OTHER_IMAGES = {
  myhyogo: `${IMAGE_BASE_PATH}/myhyogo.webp`,
  arino: `${MOVIES_BASE_PATH}/arino.webp`,
  drone: `${IMAGE_BASE_PATH}/drone.webp`,
} as const;

/**
 * 型定義
 */
export type ClientLogo = (typeof CLIENT_LOGOS)[number];
export type MovieImage = (typeof MOVIE_IMAGES)[number];
export type NewsImage = (typeof NEWS_IMAGES)[keyof typeof NEWS_IMAGES];

/**
 * ヘルパー関数
 */

/**
 * Vimeoの埋め込みURLを生成
 */
export function getVimeoEmbedUrl(videoId: string, options?: {
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  background?: boolean;
}): string {
  const params = new URLSearchParams();
  if (options?.autoplay) params.append('autoplay', '1');
  if (options?.loop) params.append('loop', '1');
  if (options?.muted) params.append('muted', '1');
  if (options?.background) params.append('background', '1');
  
  return `https://player.vimeo.com/video/${videoId}${params.toString() ? `?${params.toString()}` : ''}`;
}

/**
 * YouTubeの埋め込みURLを生成
 */
export function getYouTubeEmbedUrl(videoId: string, options?: {
  autoplay?: boolean;
  loop?: boolean;
  mute?: boolean;
}): string {
  const params = new URLSearchParams();
  if (options?.autoplay) params.append('autoplay', '1');
  if (options?.loop) params.append('loop', '1');
  if (options?.mute) params.append('mute', '1');
  
  return `https://www.youtube.com/embed/${videoId}${params.toString() ? `?${params.toString()}` : ''}`;
}

/**
 * YouTubeの短縮URLからIDを抽出
 */
export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/.*[?&]v=([^&\n?#]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
}

