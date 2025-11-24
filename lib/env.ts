/**
 * 環境変数の検証と型安全なアクセス
 */

/**
 * 環境変数を安全に取得
 */
export function getEnv(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (!value) {
    if (defaultValue) {
      return defaultValue;
    }
    throw new Error(`環境変数 ${key} が設定されていません`);
  }
  return value;
}

/**
 * 必須環境変数の検証
 */
export function validateEnv(): void {
  const requiredEnvVars: string[] = [];
  // 必要に応じて環境変数を追加
  // const requiredEnvVars = ['NEXT_PUBLIC_API_URL'];

  const missing = requiredEnvVars.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `以下の環境変数が設定されていません: ${missing.join(', ')}`
    );
  }
}

/**
 * 本番環境かどうかを判定
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * 開発環境かどうかを判定
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

