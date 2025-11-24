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
      <body className="font-sans" suppressHydrationWarning>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}