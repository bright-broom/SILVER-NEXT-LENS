/**
 * フォント設定の中央管理
 * プロジェクト全体で使用するフォント設定を一元管理
 */

import { Inter } from 'next/font/google';

/**
 * メインフォント: Inter
 * モダンで読みやすいサンセリフフォント
 */
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

/**
 * フォントクラスを取得
 */
export const getFontClass = () => `${inter.variable} m-0 p-0`;

/**
 * フォント設定の型定義
 */
export interface FontConfig {
  family: string;
  variable: string;
  className: string;
}

/**
 * フォント設定オブジェクト
 */
export const fontConfig: FontConfig = {
  family: 'Inter',
  variable: '--font-inter',
  className: inter.variable,
};

