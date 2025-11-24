'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsletterSchema, type NewsletterFormData } from '@/lib/validation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Send } from 'lucide-react';
import { newsletter as newsletterContent } from '@/lib/content';

interface SecureNewsletterFormProps {
  className?: string;
}

export default function SecureNewsletterForm({ className }: SecureNewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('登録エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <div className="relative">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={newsletterContent.placeholder}
                    className="pr-12 backdrop-blur-sm border-gray-300/50 bg-white/50 dark:bg-black/50"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isSubmitting}
            className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gray-800 text-white transition-transform hover:scale-105 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">{newsletterContent.submit}</span>
          </Button>
        </div>
        {submitStatus === 'success' && (
          <p className="mt-2 text-sm text-green-600 dark:text-green-400">
            {newsletterContent.success}
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {newsletterContent.error}
          </p>
        )}
      </form>
    </Form>
  );
}

