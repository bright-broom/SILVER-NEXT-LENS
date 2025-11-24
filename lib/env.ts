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

export function validateEnv(): void {
  const requiredEnvVars: string[] = [];
  const missing = requiredEnvVars.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `以下の環境変数が設定されていません: ${missing.join(', ')}`
    );
  }
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

