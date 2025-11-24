'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import SecureContactForm from '@/components/forms/SecureContactForm';

export default function Contact() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="Contact"
        description="お気軽にご相談ください"
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="h-full bg-white/50 dark:bg-black/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Phone className="w-12 h-12 text-primary mb-4" />
              <CardTitle>お電話</CardTitle>
              <CardDescription>平日 9:00-18:00</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">0799-45-2377</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full bg-white/50 dark:bg-black/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Mail className="w-12 h-12 text-primary mb-4" />
              <CardTitle>メール</CardTitle>
              <CardDescription>24時間受付</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                下記フォームからお問い合わせください
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="h-full bg-white/50 dark:bg-black/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <CardTitle>所在地</CardTitle>
              <CardDescription>南あわじ市</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                〒656-0122<br />
                南あわじ市広田広田365-2<br />
                山岡オフィスビル3F
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="max-w-2xl mx-auto">
        <SecureContactForm />
      </div>
    </SectionWrapper>
  );
}
