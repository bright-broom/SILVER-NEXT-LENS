'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import SecureContactForm from '@/components/forms/SecureContactForm';
import ContactCard from '@/components/ui/ContactCard';
import { COMPANY_INFO } from '@/lib/constants';

export default function Contact() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="Contact"
        description="お気軽にご相談ください"
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        <ContactCard
          icon={Phone}
          title="お電話"
          description={COMPANY_INFO.businessHours}
          delay={0}
        >
          <p className="text-2xl font-semibold">{COMPANY_INFO.phone}</p>
        </ContactCard>

        <ContactCard
          icon={Mail}
          title="メール"
          description="24時間受付"
          delay={0.1}
        >
          <p className="text-sm text-muted-foreground mb-4">
            下記フォームからお問い合わせください
          </p>
        </ContactCard>

        <ContactCard
          icon={MapPin}
          title="所在地"
          description="南あわじ市"
          delay={0.2}
        >
          <p className="text-sm text-muted-foreground">
            〒{COMPANY_INFO.postalCode}
            <br />
            {COMPANY_INFO.address}
            <br />
            {COMPANY_INFO.building}
          </p>
        </ContactCard>
      </div>

      <div className="max-w-2xl mx-auto">
        <SecureContactForm />
      </div>
    </SectionWrapper>
  );
}
