'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validation';
import { sanitizeUserInput } from '@/lib/security';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY_INFO } from '@/lib/constants';
import { contact as contactContent } from '@/lib/content';

export default function SecureContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 入力値をサニタイズ
      const sanitizedData = {
        name: sanitizeUserInput(data.name),
        email: data.email, // メールアドレスは既に検証済み
        phone: data.phone ? sanitizeUserInput(data.phone) : undefined,
        subject: sanitizeUserInput(data.subject),
        message: sanitizeUserInput(data.message),
      };

      // ここでAPIエンドポイントに送信
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(sanitizedData),
      // });

      // デモ用の遅延
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{contactContent.title}</CardTitle>
        <CardDescription>
          {contactContent.description}。内容を確認後、ご連絡いたします。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{contactContent.form.name.label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={contactContent.form.name.placeholder}
                      {...field}
                      autoComplete="name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{contactContent.form.email.label}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={contactContent.form.email.placeholder}
                      {...field}
                      autoComplete="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{contactContent.form.phone.label}</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder={contactContent.form.phone.placeholder}
                      {...field}
                      autoComplete="tel"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{contactContent.form.subject.label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={contactContent.form.subject.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{contactContent.form.message.label}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={contactContent.form.message.placeholder}
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {submitStatus === 'success' && (
              <div className="rounded-md bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                {contactContent.form.success}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="rounded-md bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                {contactContent.form.error}
              </div>
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? contactContent.form.submitting : contactContent.form.submit}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

