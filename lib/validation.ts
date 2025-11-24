import { z } from 'zod';
import { validateEmail, validatePhone } from './security';

export const emailSchema = z
  .string()
  .min(1, 'メールアドレスを入力してください')
  .max(254, 'メールアドレスが長すぎます')
  .email('有効なメールアドレスを入力してください')
  .refine((email) => validateEmail(email), {
    message: '無効なメールアドレス形式です',
  });

export const phoneSchema = z
  .string()
  .min(1, '電話番号を入力してください')
  .max(20, '電話番号が長すぎます')
  .refine((phone) => validatePhone(phone), {
    message: '有効な電話番号を入力してください',
  });

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, '名前を入力してください')
    .max(100, '名前が長すぎます')
    .regex(/^[^\x00-\x1F\x7F]*$/, '無効な文字が含まれています'),
  email: emailSchema,
  phone: phoneSchema.optional(),
  subject: z
    .string()
    .min(1, '件名を入力してください')
    .max(200, '件名が長すぎます'),
  message: z
    .string()
    .min(10, 'メッセージは10文字以上入力してください')
    .max(5000, 'メッセージが長すぎます'),
});

export const newsletterSchema = z.object({
  email: emailSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;

