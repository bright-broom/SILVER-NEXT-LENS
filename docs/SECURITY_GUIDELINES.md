# セキュリティガイドライン

## 概要

このドキュメントは、SILVER NEXT LENS プロジェクトの開発・運用におけるセキュリティガイドラインです。すべての開発者はこのガイドラインに従う必要があります。

## 機密情報の管理

### 環境変数の使用

**必須**: すべての機密情報は環境変数で管理してください。

```bash
# .env.local（.gitignore に追加済み）
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.example.com
SENDGRID_API_KEY=your-api-key-here
DATABASE_URL=your-database-url-here
```

### 環境変数の命名規則

- **公開可能な変数**: `NEXT_PUBLIC_` プレフィックスを使用
- **機密情報**: `NEXT_PUBLIC_` プレフィックスを使用しない

```bash
# ✅ 公開可能（クライアントサイドで使用）
NEXT_PUBLIC_API_URL=https://api.example.com

# ✅ 機密情報（サーバーサイドのみ）
SENDGRID_API_KEY=your-api-key-here
DATABASE_URL=your-database-url-here
```

### 禁止事項

**❌ 絶対にやってはいけないこと**:

1. 機密情報をコードに直接記述

   ```typescript
   // ❌ 悪い例
   const apiKey = "sk_live_1234567890abcdef";
   ```

2. 機密情報を Git にコミット

   ```bash
   # ❌ 悪い例
   git add .env.local
   git commit -m "Add environment variables"
   ```

3. 機密情報を README やドキュメントに記載

   ```markdown
   <!-- ❌ 悪い例 -->

   API Key: sk_live_1234567890abcdef
   ```

4. 機密情報をログに出力
   ```typescript
   // ❌ 悪い例
   console.log("API Key:", process.env.API_KEY);
   ```

## コードレビューのチェックリスト

プルリクエストを作成する前に、以下を確認してください：

- [ ] 機密情報がコードに含まれていないか
- [ ] 環境変数が適切に使用されているか
- [ ] `.env.local` が `.gitignore` に含まれているか
- [ ] 個人情報がコードに含まれていないか
- [ ] ハードコードされたパスワードやトークンがないか
- [ ] デバッグ用の console.log が削除されているか
- [ ] エラーメッセージに機密情報が含まれていないか

## 依存関係のセキュリティ

### 定期的なチェック

```bash
# セキュリティチェック
npm run security:check

# 自動修正（可能な場合）
npm run security:fix
```

### 脆弱性の対応

1. 脆弱性が検出された場合、即座に報告
2. 修正可能な場合は `npm run security:fix` を実行
3. 手動修正が必要な場合は、セキュリティチームに相談

## デプロイ前のセキュリティチェック

### 本番環境デプロイ前の確認事項

- [ ] 環境変数が適切に設定されているか
- [ ] 機密情報がコードに含まれていないか
- [ ] セキュリティヘッダーが有効か
- [ ] HTTPS が有効か
- [ ] 依存関係に脆弱性がないか
- [ ] デバッグモードが無効になっているか
- [ ] エラーメッセージに機密情報が含まれていないか

## 個人情報の取り扱い

### GDPR/個人情報保護法への対応

1. **個人情報の収集**

   - 必要最小限の情報のみ収集
   - 収集目的を明確に説明

2. **個人情報の保存**

   - 暗号化して保存
   - アクセス制御を実装

3. **個人情報の削除**
   - 不要になった情報は即座に削除
   - 削除ログを記録

### フォームデータの取り扱い

```typescript
// ✅ 良い例: サニタイゼーション
const sanitizedData = {
  name: sanitizeUserInput(data.name),
  email: data.email, // メールアドレスは検証済み
  message: sanitizeUserInput(data.message),
};
```

## セキュリティヘッダー

### 必須ヘッダー

以下のセキュリティヘッダーが設定されていることを確認：

- `Strict-Transport-Security`: HTTPS を強制
- `X-Frame-Options`: クリックジャッキング対策
- `X-Content-Type-Options`: MIME タイプスニッフィング対策
- `X-XSS-Protection`: XSS 対策
- `Content-Security-Policy`: CSP ポリシー
- `Referrer-Policy`: リファラー情報の制御

設定ファイル:

- Vercel: `public/vercel.json`
- Netlify: `public/_headers`

## 入力検証とサニタイゼーション

### すべてのユーザー入力を検証

```typescript
// ✅ 良い例: Zod スキーマによる検証
const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.email(),
  message: z.string().min(10).max(5000),
});

const validatedData = schema.parse(userInput);
```

### XSS 対策

```typescript
// ✅ 良い例: HTML エスケープ
const sanitized = sanitizeUserInput(userInput);
```

## 認証と認可（将来の拡張）

### 認証トークンの管理

- トークンは環境変数で管理
- トークンの有効期限を設定
- トークンのリフレッシュを実装

### セッション管理

- セッション ID はランダムで推測不可能
- セッションの有効期限を設定
- セッションの無効化を実装

## ログとモニタリング

### ログの取り扱い

**❌ ログに含めてはいけない情報**:

- パスワード
- API キー
- トークン
- 個人情報（メールアドレス、電話番号など）

**✅ ログに含める情報**:

- エラーメッセージ（機密情報を除く）
- リクエスト ID
- タイムスタンプ
- ユーザー ID（ハッシュ化）

### モニタリング

- 異常なアクセスパターンを検出
- セキュリティイベントを記録
- 定期的にログを確認

## インシデント対応

### セキュリティインシデントが発生した場合

1. **即座に報告**

   - セキュリティチームに連絡
   - インシデントの詳細を記録

2. **影響範囲の確認**

   - どのデータが影響を受けたか
   - どのユーザーが影響を受けたか

3. **対応策の実施**

   - 影響を受けたシステムの隔離
   - 脆弱性の修正
   - 影響を受けたユーザーへの通知

4. **再発防止策**
   - 原因の分析
   - 再発防止策の実装
   - ドキュメントの更新

## 定期的なセキュリティ監査

### 実施頻度

- **依存関係のチェック**: 毎週
- **コードレビュー**: プルリクエストごと
- **セキュリティ監査**: 四半期ごと
- **ペネトレーションテスト**: 年 1 回

### 監査項目

- コードのセキュリティレビュー
- 依存関係の脆弱性チェック
- セキュリティヘッダーの確認
- 環境変数の管理状況
- ログとモニタリングの確認

## セキュリティ教育

### 開発者向けトレーニング

- セキュリティベストプラクティス
- 一般的な脆弱性の理解
- セキュリティインシデントの対応方法

### リソース

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js セキュリティガイド](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [TypeScript セキュリティ](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

## 連絡先

セキュリティに関する質問や報告は、セキュリティチームまで連絡してください。

---

**重要**: このガイドラインは定期的に更新されます。最新版を確認してください。
