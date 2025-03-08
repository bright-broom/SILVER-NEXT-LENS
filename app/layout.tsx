// =============================
// RootLayout.tsx
// アプリ全体のレイアウトを管理するコンポーネント
// =============================
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "@/styles/globals.css"

// =============================
// メタデータ設定
// =============================
export const metadata: Metadata = {
  title: "SILVER NEXT LENS",
  description: "映像・写真制作のプロフェッショナル集団",
}

// =============================
// フォント設定
// =============================
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// フォントのクラスを取得
const getFontClass = () => `${inter.variable} m-0 p-0`

// =============================
// ThemeProvider をカスタムコンポーネント化
// =============================
const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    enableSystem={false}
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>
)

// =============================
// ルートレイアウトコンポーネント
// =============================
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={getFontClass()}>
      <body className="font-sans">
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  )
}