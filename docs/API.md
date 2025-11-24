# API 設計書

## 概要

SILVER NEXT LENS は現在、静的エクスポート（`output: 'export'`）を使用しているため、サーバーサイド API は使用していません。将来的な API 統合を見据えた設計書です。

## 現在の実装

### フォーム処理

現在、フォームはクライアントサイドで処理されています。

```typescript
// components/forms/SecureContactForm.tsx
const onSubmit = async (data: ContactFormData) => {
  const sanitizedData = {
    name: sanitizeUserInput(data.name),
    email: data.email,
    // ...
  };

  // 現在はデモ用の遅延
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // 将来的にAPIエンドポイントに送信
  // const response = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(sanitizedData),
  // });
};
```

## 将来の API 設計

### 1. お問い合わせ API

#### エンドポイント

```
POST /api/contact
```

#### リクエスト

```typescript
interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
```

#### レスポンス

```typescript
interface ContactResponse {
  success: boolean;
  message: string;
  id?: string; // 問い合わせID
}
```

#### エラーレスポンス

```typescript
interface ErrorResponse {
  success: false;
  error: string;
  details?: Record<string, string[]>; // バリデーションエラー
}
```

#### 実装例

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { sanitizeUserInput } from "@/lib/security";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // バリデーション
    const validatedData = contactFormSchema.parse(body);

    // サニタイゼーション
    const sanitizedData = {
      name: sanitizeUserInput(validatedData.name),
      email: validatedData.email,
      phone: validatedData.phone
        ? sanitizeUserInput(validatedData.phone)
        : undefined,
      subject: sanitizeUserInput(validatedData.subject),
      message: sanitizeUserInput(validatedData.message),
    };

    // データベース保存またはメール送信
    // await saveContact(sanitizedData);
    // await sendEmail(sanitizedData);

    return NextResponse.json({
      success: true,
      message: "お問い合わせを受け付けました。",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "バリデーションエラー",
          details: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "サーバーエラーが発生しました。",
      },
      { status: 500 }
    );
  }
}
```

### 2. メール購読 API

#### エンドポイント

```
POST /api/newsletter
```

#### リクエスト

```typescript
interface NewsletterRequest {
  email: string;
}
```

#### レスポンス

```typescript
interface NewsletterResponse {
  success: boolean;
  message: string;
}
```

#### 実装例

```typescript
// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = newsletterSchema.parse(body);

    // メール購読サービスに登録
    // await subscribeToNewsletter(validatedData.email);

    return NextResponse.json({
      success: true,
      message: "登録が完了しました",
    });
  } catch (error) {
    // エラーハンドリング
    return NextResponse.json(
      {
        success: false,
        error: "登録に失敗しました",
      },
      { status: 400 }
    );
  }
}
```

## セキュリティ

### レート制限

```typescript
// lib/rate-limit.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 m"), // 1分間に5回
});

export async function checkRateLimit(identifier: string) {
  const { success } = await ratelimit.limit(identifier);
  return success;
}
```

### CSRF 対策

```typescript
// lib/csrf.ts
import { generateCsrfToken } from "@/lib/security";

export async function validateCsrfToken(token: string, sessionToken: string) {
  return token === sessionToken;
}
```

### 入力検証

すべての API エンドポイントで Zod スキーマによる検証を実施。

```typescript
const validatedData = contactFormSchema.parse(body);
```

## エラーハンドリング

### エラーレスポンス形式

```typescript
interface ApiError {
  success: false;
  error: string;
  code?: string;
  details?: unknown;
}
```

### HTTP ステータスコード

- **200**: 成功
- **400**: バリデーションエラー
- **401**: 認証エラー
- **403**: 権限エラー
- **429**: レート制限
- **500**: サーバーエラー

## データベース設計（将来の拡張）

### お問い合わせテーブル

```sql
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(254) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'pending'
);
```

### メール購読テーブル

```sql
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(254) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT NOW(),
  unsubscribed_at TIMESTAMP,
  status VARCHAR(20) DEFAULT 'active'
);
```

## 外部サービス統合

### メール送信サービス

#### SendGrid

```typescript
// lib/email.ts
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendContactEmail(data: ContactData) {
  const msg = {
    to: process.env.CONTACT_EMAIL!,
    from: process.env.FROM_EMAIL!,
    subject: `お問い合わせ: ${data.subject}`,
    text: `
      名前: ${data.name}
      メール: ${data.email}
      電話: ${data.phone || "未入力"}
      
      メッセージ:
      ${data.message}
    `,
  };

  await sgMail.send(msg);
}
```

### メール購読サービス

#### Mailchimp

```typescript
// lib/newsletter.ts
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER!,
});

export async function subscribeToNewsletter(email: string) {
  await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID!, {
    email_address: email,
    status: "subscribed",
  });
}
```

## モニタリングとロギング

### エラーロギング

```typescript
// lib/logger.ts
import { logger } from "@/lib/logger";

export async function logError(error: Error, context: Record<string, unknown>) {
  logger.error("API Error", {
    error: error.message,
    stack: error.stack,
    ...context,
  });
}
```

### アナリティクス

```typescript
// lib/analytics.ts
export async function trackEvent(
  event: string,
  properties: Record<string, unknown>
) {
  // Google Analytics, Mixpanel等に送信
}
```

## テスト

### API テスト

```typescript
// __tests__/api/contact.test.ts
import { POST } from "@/app/api/contact/route";
import { NextRequest } from "next/server";

describe("POST /api/contact", () => {
  it("should return success for valid data", async () => {
    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        subject: "Test Subject",
        message: "Test message",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(data.success).toBe(true);
  });
});
```

## 移行計画

### フェーズ 1: 静的エクスポート維持

- フォーム送信はクライアントサイド処理
- 外部サービス（SendGrid 等）を直接呼び出し

### フェーズ 2: API Routes 追加

- `output: 'export'`を削除
- API Routes を実装
- データベース接続

### フェーズ 3: フルスタック化

- 認証機能追加
- 管理画面実装
- CMS 統合

## 注意事項

現在の実装では、静的エクスポートを使用しているため、API Routes は使用できません。API 機能を追加する場合は、`next.config.js`から`output: 'export'`を削除する必要があります。
