import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
  title: 'SILVER NEXT LENS',
  description: '映像・写真制作のプロフェッショナル集団',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const getFontClass = () => `${inter.variable} m-0 p-0`;

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
    <html lang="ja" className={getFontClass()}>
      <body className="font-sans">
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}