# デザインシステム

## 概要

SILVER NEXT LENS のデザインシステムは、ドローン映像クリエイター向けの洗練されたデザインを実現するための包括的なガイドラインです。

## デザインコンセプト

### テーマ

**「空と海をイメージした洗練されたデザイン」**

- 空の広がりと海の深さを表現
- プロフェッショナルな映像制作会社としての信頼感
- モダンでスタイリッシュな印象

## カラーパレット

### プライマリカラー

```css
--primary: 195 100% 47%; /* シアンブルー */
--primary-foreground: 0 0% 100%;
```

**使用例**: ボタン、リンク、アクセント

### セカンダリカラー

```css
--secondary: 210 40% 98%;
--secondary-foreground: 222.2 47.4% 11.2%;
```

**使用例**: 背景、カード

### グラデーション

#### ライトモード

```css
/* 空をイメージしたグラデーション */
--section-gradient-1: linear-gradient(
  135deg,
  #f8fafc 0%,
  #f1f5f9 25%,
  #e2e8f0 50%,
  #f1f5f9 75%,
  #f8fafc 100%
);
--section-gradient-2: linear-gradient(
  135deg,
  #f0f9ff 0%,
  #e0f2fe 30%,
  #bae6fd 60%,
  #e0f2fe 100%
);
--section-gradient-sky: linear-gradient(
  180deg,
  #e0f2fe 0%,
  #bae6fd 25%,
  #7dd3fc 50%,
  #38bdf8 75%,
  #0ea5e9 100%
);
--section-gradient-ocean: linear-gradient(
  135deg,
  #e0f2fe 0%,
  #93c5fd 30%,
  #60a5fa 60%,
  #3b82f6 100%
);
```

#### ダークモード

```css
--section-gradient-1: linear-gradient(
  135deg,
  #0f172a 0%,
  #1e293b 25%,
  #334155 50%,
  #1e293b 75%,
  #0f172a 100%
);
--section-gradient-sky: linear-gradient(
  180deg,
  #0c4a6e 0%,
  #075985 25%,
  #0369a1 50%,
  #0284c7 75%,
  #0ea5e9 100%
);
```

## タイポグラフィ

### フォント

**Inter** - Google Fonts

```typescript
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});
```

### フォントサイズ

#### レスポンシブヘッディング

```css
.responsive-heading {
  @apply text-5xl sm:text-6xl md:text-7xl lg:text-8xl;
  letter-spacing: -0.02em;
}
```

#### レスポンシブテキスト

```css
.responsive-text {
  @apply text-lg sm:text-xl md:text-2xl lg:text-3xl;
}
```

### フォントウェイト

- **Light**: 300
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## スペーシング

### セクションパディング

```css
.section-spacing {
  @apply py-24 sm:py-32 md:py-40 lg:py-48;
}
```

### コンテナ

```css
.container {
  max-width: 1600px;
  @apply mx-auto px-4 sm:px-6 lg:px-8;
}
```

### グリッドギャップ

```css
.grid-responsive {
  @apply gap-10;
}
```

## コンポーネントスタイル

### ボタン

#### デフォルト

```css
/* グラデーションボタン */
bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400
hover:scale-110 hover:-translate-y-1
shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(6,182,212,0.5)]
```

#### バリアント

- **default**: グラデーションボタン
- **outline**: アウトライン
- **secondary**: セカンダリ
- **ghost**: ゴースト
- **destructive**: 破壊的アクション

### カード

#### 基本スタイル

```css
.rounded-3xl
.border-2
.shadow-2xl
.hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.25)]
.hover:-translate-y-1
.hover:scale-[1.01]
```

#### グラスモーフィズム

```css
.glass-card {
  @apply backdrop-blur-2xl bg-white/80 dark:bg-slate-900/80;
  @apply border border-white/30 dark:border-slate-700/30;
  @apply shadow-2xl;
}
```

### 入力フィールド

```css
.h-14
.rounded-2xl
.border-2
.bg-background/80
.backdrop-blur-sm
.focus-visible:ring-2
.focus-visible:ring-cyan-500/50
```

## エフェクト

### グラデーションテキスト

```css
.gradient-text {
  @apply bg-clip-text text-transparent;
  @apply bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400;
  animation: gradient-shift 3s ease infinite;
}
```

### ホバーエフェクト

```css
.card-hover {
  @apply transition-all duration-700;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @apply hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03];
  @apply hover:brightness-105;
}
```

### グローエフェクト

```css
.glow-effect::before {
  @apply bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20;
  @apply blur-xl opacity-0 transition-opacity duration-500;
}

.glow-effect:hover::before {
  @apply opacity-100;
}
```

### シャドウ

```css
.elegant-shadow {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}
```

## アニメーション

### フェードイン

```css
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### スライドアップ

```css
.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}
```

### Framer Motion

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## レスポンシブデザイン

### ブレークポイント

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### グリッドシステム

```css
.grid-responsive {
  @apply grid grid-cols-1 gap-10 
         sm:grid-cols-2 
         lg:grid-cols-3 
         xl:grid-cols-4;
}
```

## アクセシビリティ

### コントラスト比

- テキスト: WCAG AA 準拠（4.5:1 以上）
- 大きなテキスト: WCAG AA 準拠（3:1 以上）

### フォーカス表示

```css
.focus-visible:ring-2
.focus-visible:ring-cyan-500/50
.focus-visible:ring-offset-2
```

### ARIA 属性

```typescript
<button
  aria-label="Previous testimonial"
  title="Previous testimonial"
>
```

## アイコン

### Lucide React

```typescript
import { ChevronDown, Phone, Mail, MapPin } from "lucide-react";
```

### サイズ

- **Small**: 16px
- **Medium**: 24px
- **Large**: 32px

## 画像

### 形式

- **WebP**: 最適化された画像形式
- **遅延読み込み**: `loading="lazy"`
- **レスポンシブサイズ**: `sizes`属性

### アスペクト比

- **カード**: 16:9
- **サムネイル**: 4:3
- **ロゴ**: 2:1

## ダークモード

### 実装

`next-themes`によるテーマ管理。

### カラー調整

ダークモードでは、グラデーションとコントラストを調整。

## 使用ガイドライン

### ボタンの使用

- **プライマリアクション**: `default`バリアント
- **セカンダリアクション**: `outline`バリアント
- **破壊的アクション**: `destructive`バリアント

### カードの使用

- **コンテンツカード**: `glass-card`クラス
- **ホバーエフェクト**: `card-hover`クラス

### グラデーションの使用

- **セクション背景**: `section-gradient-1`または`section-gradient-2`
- **特別なセクション**: `section-gradient-sky`または`section-gradient-ocean`

## カスタマイズ

### カラーの変更

`app/globals.css`の CSS 変数を編集。

### フォントの変更

`lib/fonts.ts`を編集。

### スペーシングの調整

`app/globals.css`のユーティリティクラスを編集。
