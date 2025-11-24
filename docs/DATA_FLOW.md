# データフロー設計書

## 概要

SILVER NEXT LENS のデータフローは、中央管理システムによる一元管理と、コンポーネント間での効率的なデータ受け渡しを実現しています。

## データ管理アーキテクチャ

### 中央管理システム

```
┌─────────────────────────────────────┐
│      lib/ (データ管理層)            │
│  ┌───────────────────────────────┐ │
│  │  content.ts (テキスト)         │ │
│  │  assets.ts (アセットパス)       │ │
│  │  constants.ts (定数)           │ │
│  │  fonts.ts (フォント設定)        │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
         ↓ import
┌─────────────────────────────────────┐
│   components/ (コンポーネント層)    │
│  ┌───────────────────────────────┐ │
│  │  sections/ (セクション)         │ │
│  │  ui/ (UIコンポーネント)         │ │
│  │  forms/ (フォーム)              │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

## データフロー図

### 1. コンテンツデータフロー

```
lib/content.ts
    ↓ export
components/sections/[Section].tsx
    ↓ props
SectionHeader / SectionWrapper
    ↓ render
DOM
```

**例: サービスセクション**

```typescript
// lib/content.ts
export const services = {
  title: 'Service',
  description: '...',
  items: [...]
} as const;

// components/sections/Services.tsx
import { services as servicesContent } from '@/lib/content';

export default function Services() {
  return (
    <SectionWrapper>
      <SectionHeader
        title={servicesContent.title}
        description={servicesContent.description}
      />
      {servicesContent.items.map(item => (
        <ServiceCard key={item.title} {...item} />
      ))}
    </SectionWrapper>
  );
}
```

### 2. アセットデータフロー

```
public/images/
    ↓
lib/assets.ts (パス定義)
    ↓ export
components/sections/[Section].tsx
    ↓ Image component
Next.js Image Optimization
    ↓
Browser
```

**例: クライアントロゴ**

```typescript
// lib/assets.ts
export const CLIENT_LOGOS = [
  { name: "NHK", logo: "/images/logo/NHK_logo.webp" },
  // ...
] as const;

// components/sections/Clients.tsx
import { CLIENT_LOGOS } from "@/lib/assets";

const clients: Client[] = CLIENT_LOGOS;

export default function Clients() {
  return (
    <div>
      {clients.map((client, index) => (
        <Image key={index} src={client.logo} alt={client.name} loading="lazy" />
      ))}
    </div>
  );
}
```

### 3. フォームデータフロー

```
User Input
    ↓
React Hook Form
    ↓
Zod Schema Validation (lib/validation.ts)
    ↓
Sanitization (lib/security.ts)
    ↓
Form State Management
    ↓
Submit Handler
    ↓
API (将来の拡張)
```

**例: お問い合わせフォーム**

```typescript
// lib/validation.ts
export const contactFormSchema = z.object({
  name: z.string().min(1).max(100),
  email: emailSchema,
  // ...
});

// components/forms/SecureContactForm.tsx
const form = useForm<ContactFormData>({
  resolver: zodResolver(contactFormSchema),
});

const onSubmit = async (data: ContactFormData) => {
  const sanitizedData = {
    name: sanitizeUserInput(data.name),
    email: data.email,
    // ...
  };
  // API送信処理
};
```

## データ管理の原則

### 1. 単一の真実の源（Single Source of Truth）

すべてのデータは一箇所で管理。

```typescript
// ✅ 良い例: 中央管理
// lib/content.ts
export const services = { ... } as const;

// ❌ 悪い例: 分散管理
// components/sections/Services.tsx
const services = { ... }; // ハードコード
```

### 2. 不変性（Immutability）

`as const`による型安全な定数定義。

```typescript
export const services = {
  title: 'Service',
  items: [...]
} as const; // 読み取り専用
```

### 3. 型安全性

TypeScript による型定義。

```typescript
// lib/validation.ts
export type ContactFormData = z.infer<typeof contactFormSchema>;

// components/forms/SecureContactForm.tsx
const form = useForm<ContactFormData>({ ... });
```

## データ構造

### コンテンツデータ構造

```typescript
// lib/content.ts
export const metadata = {
  title: string;
  description: string;
} as const;

export const services = {
  title: string;
  description: string;
  items: Array<{
    title: string;
    description: string;
  }>;
} as const;
```

### アセットデータ構造

```typescript
// lib/assets.ts
export const HERO_ASSETS = {
  backgroundVideo: {
    vimeoId: string;
    url: string;
  };
} as const;

export const CLIENT_LOGOS: Array<{
  name: string;
  logo: string;
}> = [...];
```

### 定数データ構造

```typescript
// lib/constants.ts
export const COMPANY_INFO = {
  name: string;
  company: string;
  address: string;
  phone: string;
  email: string;
  // ...
} as const;
```

## データ更新フロー

### コンテンツの更新

1. `lib/content.ts`を編集
2. 型チェック（自動）
3. ビルド時に反映

### アセットの追加

1. `public/images/`にファイルを配置
2. `lib/assets.ts`にパスを追加
3. コンポーネントで使用

### 定数の更新

1. `lib/constants.ts`を編集
2. 使用箇所に自動反映

## 状態管理

### ローカル状態

React Hooks による状態管理。

```typescript
// フォーム状態
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

// フォーム管理
const form = useForm<ContactFormData>({ ... });
```

### グローバル状態

現在は使用していないが、将来的に以下を検討：

- **テーマ管理**: `next-themes`（既に実装済み）
- **ユーザー状態**: Context API
- **キャッシュ**: React Query（API 連携時）

## データ検証フロー

### フォームバリデーション

```
User Input
    ↓
React Hook Form (リアルタイム検証)
    ↓
Zod Schema (型安全な検証)
    ↓
エラーメッセージ表示 / 送信許可
```

### セキュリティ検証

```
Validated Data
    ↓
Sanitization (XSS対策)
    ↓
Dangerous Pattern Check
    ↓
Safe Data
```

## パフォーマンス最適化

### メモ化

```typescript
// データのメモ化
const clientLogos = useMemo(
  () =>
    clients.map((client, index) => (
      <ClientLogo key={index} client={client} index={index} />
    )),
  []
);
```

### 遅延読み込み

```typescript
// 動的インポート
const Services = dynamic(() => import("@/components/sections/Services"), {
  loading: () => <div className="min-h-[400px]" />,
});
```

## データの拡張性

### 新規セクションの追加

1. `lib/content.ts`にデータを追加
2. `components/sections/NewSection.tsx`を作成
3. `app/page.tsx`に追加

### 新規アセットの追加

1. `public/images/`に配置
2. `lib/assets.ts`に定義
3. コンポーネントで使用

### API 連携（将来の拡張）

```typescript
// 将来的な実装例
const { data, isLoading } = useQuery({
  queryKey: ["news"],
  queryFn: () => fetch("/api/news").then((res) => res.json()),
});
```

## データのバックアップとバージョン管理

### Git 管理

すべてのデータファイルは Git で管理。

### 環境変数

機密情報は環境変数で管理（`lib/env.ts`）。

```typescript
export function getEnv(key: string, defaultValue?: string): string {
  const value = process.env[key];
  // ...
}
```

## データの移行戦略

### CMS 統合（将来の拡張）

現在は静的データだが、将来的に CMS から取得可能に。

```typescript
// 将来的な実装例
async function getContent() {
  const response = await fetch(CMS_API_URL);
  return response.json();
}
```
