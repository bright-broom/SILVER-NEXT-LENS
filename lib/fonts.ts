import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const getFontClass = () => `${inter.variable} m-0 p-0`;

export interface FontConfig {
  family: string;
  variable: string;
  className: string;
}

export const fontConfig: FontConfig = {
  family: 'Inter',
  variable: '--font-inter',
  className: inter.variable,
};

