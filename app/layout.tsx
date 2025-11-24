import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { getFontClass } from '@/lib/fonts';
import { metadata as siteMetadata } from '@/lib/content';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    enableSystem={false}
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={getFontClass()} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}