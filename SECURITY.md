# セキュリティポリシー

## セキュリティ対策の概要

このプロジェクトでは、以下のセキュリティ対策を実装しています。

### 1. セキュリティヘッダー

Next.js の設定により、以下のセキュリティヘッダーが自動的に設定されます：

- **Strict-Transport-Security (HSTS)**: HTTPS 接続を強制
- **X-Frame-Options**: クリックジャッキング攻撃を防止
- **X-Content-Type-Options**: MIME タイプスニッフィングを防止
- **X-XSS-Protection**: XSS 攻撃に対するブラウザの保護を有効化
- **Referrer-Policy**: リファラー情報の漏洩を制御
- **Permissions-Policy**: ブラウザ機能へのアクセスを制限

### 2. 入力検証とサニタイゼーション

- **Zod スキーマ**: すべてのフォーム入力に対して厳格な検証を実装
- **HTML エスケープ**: XSS 攻撃を防ぐための HTML エスケープ機能
- **入力サニタイゼーション**: 危険な文字列パターンの検出と除去

### 3. セキュアなフォームコンポーネント

- `SecureContactForm`: お問い合わせフォーム（完全な検証とサニタイゼーション）
- `SecureNewsletterForm`: メール購読フォーム（メールアドレス検証）

### 4. 環境変数管理

環境変数のテンプレート（`.env.local`ファイルを作成して使用）：

```env
# アプリケーション設定
NODE_ENV=production

# API設定（必要に応じて追加）
# NEXT_PUBLIC_API_URL=https://api.example.com

# セキュリティ設定
# CSRF_SECRET=your-secret-key-here

# メール設定（必要に応じて追加）
# SMTP_HOST=smtp.example.com
# SMTP_PORT=587
# SMTP_USER=your-email@example.com
# SMTP_PASS=your-password
```

- `lib/env.ts`: 環境変数の型安全なアクセスと検証

### 5. 依存関係のセキュリティ

定期的に依存関係の脆弱性をチェック：

```bash
npm run security:check
npm run security:fix
```

## セキュリティベストプラクティス

### 開発時の注意事項

1. **環境変数**: 機密情報は環境変数に保存し、`.env.local`ファイルを`.gitignore`に追加
2. **依存関係**: 定期的に`npm audit`を実行して脆弱性をチェック
3. **入力検証**: すべてのユーザー入力を検証し、サニタイズする
4. **HTTPS**: 本番環境では必ず HTTPS を使用

### コードレビュー時のチェックリスト

- [ ] ユーザー入力が適切に検証されているか
- [ ] HTML エスケープが適切に実装されているか
- [ ] 環境変数が適切に管理されているか
- [ ] セキュリティヘッダーが設定されているか
- [ ] 依存関係に既知の脆弱性がないか

## 脆弱性の報告

セキュリティ上の問題を発見した場合は、直接開発チームに連絡してください。

## 更新履歴

- 2024: 包括的なセキュリティ対策を実装
