/**
 * セキュリティユーティリティ関数
 * XSS攻撃、インジェクション攻撃などを防ぐための関数群
 */

/**
 * HTMLタグをエスケープしてXSS攻撃を防ぐ
 */
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * URLをサニタイズして安全なURLか検証
 */
export function sanitizeUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    // 許可されたプロトコルのみ
    const allowedProtocols = ['http:', 'https:', 'mailto:', 'tel:'];
    if (!allowedProtocols.includes(parsed.protocol)) {
      return null;
    }
    return url;
  } catch {
    return null;
  }
}

/**
 * メールアドレスの検証
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * 電話番号の検証（日本の形式）
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\-+()\s]+$/;
  return phoneRegex.test(phone) && phone.length <= 20;
}

/**
 * 入力文字列の長さを検証
 */
export function validateLength(
  input: string,
  min: number,
  max: number
): boolean {
  return input.length >= min && input.length <= max;
}

/**
 * SQLインジェクションやコマンドインジェクションを防ぐためのサニタイズ
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[;'"\\]/g, '')
    .replace(/\s+/g, ' ');
}

/**
 * CSRFトークンの生成（簡易版）
 */
export function generateCsrfToken(): string {
  const array = new Uint8Array(32);
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(array);
  } else {
    // フォールバック（本番環境では推奨されない）
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join(
    ''
  );
}

/**
 * 危険な文字列パターンを検出
 */
export function containsDangerousPatterns(input: string): boolean {
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /data:text\/html/i,
    /vbscript:/i,
    /expression\(/i,
  ];
  return dangerousPatterns.some((pattern) => pattern.test(input));
}

/**
 * 入力値を安全にサニタイズ（複合的な検証）
 */
export function sanitizeUserInput(input: string): string {
  if (containsDangerousPatterns(input)) {
    throw new Error('危険な文字列が検出されました');
  }
  return escapeHtml(sanitizeInput(input));
}

/**
 * Content Security Policyのヘッダー値を生成
 */
export function generateCSPHeader(): string {
  const isDev = process.env.NODE_ENV === 'development';
  
  return [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://player.vimeo.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://player.vimeo.com https://*.vimeo.com",
    "frame-src 'self' https://player.vimeo.com",
    "media-src 'self' https://player.vimeo.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join('; ');
}

