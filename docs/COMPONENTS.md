# コンポーネント設計書

## 概要

SILVER NEXT LENS のコンポーネント設計は、再利用性、保守性、パフォーマンスを重視した設計となっています。

## コンポーネント階層

### 階層構造

```
app/
  └── page.tsx (ページコンポーネント)
      └── components/sections/ (セクションコンポーネント)
          ├── SectionWrapper (共通ラッパー)
          ├── SectionHeader (共通ヘッダー)
          └── [各セクション]
              └── components/ui/ (UIコンポーネント)
                  └── components/forms/ (フォームコンポーネント)
```

## コンポーネント分類

### 1. ページセクションコンポーネント (`components/sections/`)

各ページセクションを表すコンポーネント。

#### 共通パターン

```typescript
"use client";

import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import { sectionContent } from "@/lib/content";

export default function Section() {
  return (
    <SectionWrapper>
      <SectionHeader
        title={sectionContent.title}
        description={sectionContent.description}
      />
      {/* セクション固有のコンテンツ */}
    </SectionWrapper>
  );
}
```

#### 主要セクション

| コンポーネント | 役割             | 特徴                                     |
| -------------- | ---------------- | ---------------------------------------- |
| `Hero.tsx`     | ファーストビュー | Vimeo 動画背景、スクロールインジケーター |
| `Concept.tsx`  | コンセプト説明   | グラデーションテキスト、アニメーション   |
| `Services.tsx` | サービス紹介     | グリッドレイアウト、アイコン表示         |
| `Video.tsx`    | メイン動画       | 動画ダイアログ、サムネイル表示           |
| `Movies.tsx`   | 制作実績         | パララックススクロール、画像ギャラリー   |
| `Team.tsx`     | チーム紹介       | アニメーションテスティモニアル           |
| `History.tsx`  | 沿革             | タイムライン表示                         |
| `About.tsx`    | 会社概要         | 情報カード表示                           |
| `Clients.tsx`  | 取引先           | ロゴグリッド、ホバーエフェクト           |
| `News.tsx`     | ニュース         | カードグリッド、リンク付き               |
| `Contact.tsx`  | お問い合わせ     | フォーム、連絡先カード                   |
| `Footer.tsx`   | フッター         | リンク、SNS、著作権情報                  |

### 2. 共通コンポーネント (`components/sections/`)

#### SectionWrapper

**役割**: セクションの共通ラッパーとアニメーション

**Props**:

```typescript
interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  gradient?: "gradient-1" | "gradient-2" | "none";
  padding?: "none" | "sm" | "md" | "lg";
  animationDelay?: number;
}
```

**特徴**:

- Framer Motion によるスクロールアニメーション
- グラデーション背景の選択
- レスポンシブパディング
- React.memo による最適化

#### SectionHeader

**役割**: セクションタイトルと説明の表示

**Props**:

```typescript
interface SectionHeaderProps {
  title: string | ReactNode;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}
```

**特徴**:

- グラデーションテキスト
- レスポンシブタイポグラフィ
- Framer Motion アニメーション

### 3. UI コンポーネント (`components/ui/`)

shadcn/ui ベースの再利用可能な UI コンポーネント。

#### 主要 UI コンポーネント

| コンポーネント         | 用途                   | 特徴                                 |
| ---------------------- | ---------------------- | ------------------------------------ |
| `Button`               | ボタン                 | バリアント、サイズ、グラデーション   |
| `Input`                | 入力フィールド         | バリデーション、フォーカスエフェクト |
| `Textarea`             | テキストエリア         | リサイズ無効、バリデーション         |
| `Card`                 | カード                 | グラスモーフィズム、ホバーエフェクト |
| `AnimatedCard`         | アニメーションカード   | フェードアップ、スケール             |
| `ParallaxScrollSecond` | パララックススクロール | 3 カラムレイアウト、スクロール連動   |
| `AnimatedTestimonials` | テスティモニアル       | スライドショー、ナビゲーション       |
| `HeroVideoDialog`      | 動画ダイアログ         | モーダル、アニメーション             |

#### カスタムコンポーネント

**AnimatedCard**

```typescript
interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animationType?: "fadeUp" | "fade" | "scale";
}
```

- スクロール連動アニメーション
- 複数のアニメーションタイプ
- React.memo による最適化

**ParallaxScrollSecond**

```typescript
interface ParallaxScrollSecondProps {
  images: string[];
  className?: string;
}
```

- 3 カラムレイアウト
- パララックス効果
- useMemo による画像分割最適化

### 4. フォームコンポーネント (`components/forms/`)

#### SecureContactForm

**役割**: お問い合わせフォーム

**特徴**:

- React Hook Form によるフォーム管理
- Zod スキーマによるバリデーション
- サニタイゼーション処理
- 送信状態管理

**フォームフィールド**:

- 名前（必須）
- メールアドレス（必須）
- 電話番号（任意）
- 件名（必須）
- メッセージ（必須、10 文字以上）

#### SecureNewsletterForm

**役割**: メール購読フォーム

**特徴**:

- メールアドレスのみ
- バリデーション
- 送信状態管理

## コンポーネント設計原則

### 1. 単一責任の原則

各コンポーネントは単一の責任のみを持つ。

```typescript
// ❌ 悪い例: 複数の責任
function Section() {
  // データ取得
  // UI表示
  // アニメーション
  // バリデーション
}

// ✅ 良い例: 単一の責任
function Section() {
  return (
    <SectionWrapper>
      <Content />
    </SectionWrapper>
  );
}
```

### 2. 再利用性

共通機能はコンポーネント化。

```typescript
// 再利用可能なコンポーネント
<SectionWrapper gradient="gradient-1" padding="lg">
  <SectionHeader title="Title" description="Description" />
</SectionWrapper>
```

### 3. パフォーマンス最適化

- React.memo による再レンダリング防止
- useMemo/useCallback による計算最適化
- 動的インポートによるコード分割

```typescript
// メモ化
export default memo(Component);

// useMemo
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### 4. 型安全性

TypeScript による型定義。

```typescript
interface ComponentProps {
  title: string;
  description?: string;
  children: ReactNode;
}

function Component({ title, description, children }: ComponentProps) {
  // ...
}
```

## コンポーネント間の通信

### Props 経由のデータ渡し

```typescript
// 親コンポーネント
<SectionWrapper gradient="gradient-1">
  <SectionHeader title={content.title} />
</SectionWrapper>
```

### コンテキスト（将来の拡張）

現在は使用していないが、将来的にテーマやユーザー状態管理に使用可能。

## スタイリング

### Tailwind CSS

ユーティリティファーストのアプローチ。

```typescript
className = "flex items-center justify-center p-6 rounded-2xl";
```

### CSS Modules

コンポーネント固有のスタイル（`Hero.module.css`）。

### グローバルスタイル

`app/globals.css`で定義されたカスタムクラス。

```css
.section-gradient-1 {
  /* ... */
}
.glass-card {
  /* ... */
}
.gradient-text {
  /* ... */
}
```

## アニメーション

### Framer Motion

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {content}
</motion.div>
```

### アニメーションタイプ

- **フェードアップ**: 下から上にフェードイン
- **スケール**: 拡大しながら表示
- **パララックス**: スクロール連動

## アクセシビリティ

### ARIA 属性

```typescript
<button aria-label="Previous testimonial" title="Previous testimonial">
  <ArrowLeft />
</button>
```

### セマンティック HTML

適切な HTML タグの使用（`<section>`, `<article>`, `<nav>`など）。

## テスト戦略（将来の拡張）

### ユニットテスト

各コンポーネントの個別テスト。

### 統合テスト

コンポーネント間の連携テスト。

### E2E テスト

ユーザーフローのテスト。
