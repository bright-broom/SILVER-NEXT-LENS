# アーキテクチャ設計書

## 概要

SILVER NEXT LENS は、Next.js 13.5.1 の App Router を使用したモダンな Web アプリケーションです。静的エクスポート（`output: 'export'`）を採用し、高いパフォーマンスとセキュリティを実現しています。

## システムアーキテクチャ

### 全体構成

```
┌─────────────────────────────────────────┐
│         Next.js App Router               │
│  ┌───────────────────────────────────┐  │
│  │      app/ (ルーティング層)         │  │
│  │  - layout.tsx (ルートレイアウト)   │  │
│  │  - page.tsx (ホームページ)         │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │   components/ (コンポーネント層)   │  │
│  │  - sections/ (ページセクション)    │  │
│  │  - ui/ (再利用可能UI)              │  │
│  │  - forms/ (フォーム)                │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │      lib/ (ビジネスロジック層)      │  │
│  │  - assets.ts (アセット管理)         │  │
│  │  - content.ts (コンテンツ管理)      │  │
│  │  - constants.ts (定数管理)          │  │
│  │  - security.ts (セキュリティ)       │  │
│  │  - validation.ts (バリデーション)   │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

## レイヤー構造

### 1. プレゼンテーション層（Presentation Layer）

**役割**: UI の表示とユーザーインタラクション

**主要コンポーネント**:

- `app/page.tsx`: ページルーティングとセクション統合
- `components/sections/*`: 各ページセクション
- `components/ui/*`: 再利用可能な UI コンポーネント

**特徴**:

- 動的インポートによるコード分割
- React.memo による再レンダリング最適化
- Framer Motion によるアニメーション

### 2. ビジネスロジック層（Business Logic Layer）

**役割**: データ管理、バリデーション、セキュリティ処理

**主要モジュール**:

- `lib/content.ts`: テキストコンテンツの中央管理
- `lib/assets.ts`: 画像・動画アセットの管理
- `lib/constants.ts`: 会社情報、サービス一覧
- `lib/validation.ts`: Zod スキーマによるバリデーション
- `lib/security.ts`: XSS 対策、サニタイゼーション

**特徴**:

- 単一責任の原則に基づく分離
- 型安全性の確保（TypeScript）
- 中央管理による一貫性の維持

### 3. データ層（Data Layer）

**役割**: 静的データとアセットの管理

**主要リソース**:

- `public/images/`: 画像アセット
- `lib/assets.ts`: アセットパスの定義
- `lib/content.ts`: テキストデータ

**特徴**:

- 静的ファイルの最適化
- WebP 形式による画像最適化
- パスの一元管理

## 設計原則

### 1. 関心の分離（Separation of Concerns）

各レイヤーは明確な責任を持ち、他のレイヤーに依存しない設計。

```
Presentation Layer → Business Logic Layer → Data Layer
```

### 2. 単一責任の原則（Single Responsibility Principle）

各コンポーネント・モジュールは単一の責任のみを持つ。

- `SectionWrapper`: セクションのラッパーとアニメーション
- `SectionHeader`: セクションタイトルと説明
- `SecureContactForm`: お問い合わせフォームの処理

### 3. DRY 原則（Don't Repeat Yourself）

重複を避けるための中央管理システム。

- テキスト: `lib/content.ts`
- アセット: `lib/assets.ts`
- 定数: `lib/constants.ts`

### 4. 型安全性（Type Safety）

TypeScript による厳格な型チェック。

- インターフェース定義: `components/sections/types.ts`
- バリデーションスキーマ: `lib/validation.ts`

## パフォーマンス最適化

### コード分割

```typescript
// app/page.tsx
const Concept = dynamic(() => import("@/components/sections/Concept"), {
  loading: () => <div className="min-h-[400px]" />,
});
```

各セクションを動的インポートし、必要な時のみ読み込む。

### 画像最適化

```typescript
<Image src={imageSrc} loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" />
```

- 遅延読み込み
- レスポンシブサイズ指定
- Next.js Image コンポーネントによる最適化

### メモ化

```typescript
export default memo(Component);
```

React.memo、useMemo、useCallback による再レンダリング最適化。

## セキュリティアーキテクチャ

### 入力検証フロー

```
ユーザー入力
    ↓
Zodスキーマ検証 (lib/validation.ts)
    ↓
サニタイゼーション (lib/security.ts)
    ↓
安全なデータ処理
```

### セキュリティヘッダー

静的エクスポートのため、ホスティングプロバイダーで設定：

- Vercel: `public/vercel.json`
- Netlify: `public/_headers`

## デプロイメントアーキテクチャ

### 静的エクスポート

```javascript
// next.config.js
output: "export";
```

- ビルド時にすべてのページを静的 HTML として生成
- CDN 配信による高速化
- サーバーレス運用

### ビルドプロセス

```
開発環境 (npm run dev)
    ↓
ビルド (npm run build)
    ↓
静的ファイル生成 (.next/)
    ↓
デプロイ (Vercel/Netlify)
```

## 拡張性

### 新規セクションの追加

1. `components/sections/NewSection.tsx`を作成
2. `app/page.tsx`に動的インポートを追加
3. `lib/content.ts`にコンテンツを追加

### 新規アセットの追加

1. `public/images/`にファイルを配置
2. `lib/assets.ts`にパスを追加
3. コンポーネントで使用

## 技術的制約

### 静的エクスポートの制限

- サーバーサイド機能は使用不可
- API Routes は使用不可
- 動的ルーティングは制限あり

### 対応策

- フォーム送信: クライアントサイド処理（将来的に API 連携可能）
- 動的コンテンツ: ビルド時に生成

## 今後の拡張計画

1. **API 統合**: フォーム送信のバックエンド連携
2. **CMS 統合**: コンテンツ管理システムの導入
3. **多言語対応**: i18n の実装
4. **PWA 対応**: プログレッシブウェブアプリ化
