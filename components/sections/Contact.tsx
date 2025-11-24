'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import SecureContactForm from '@/components/forms/SecureContactForm';
import ContactCard from '@/components/ui/ContactCard';
import { COMPANY_INFO } from '@/lib/constants';
import { contact as contactContent } from '@/lib/content';

export default function Contact() {
  return (
    <SectionWrapper>
      <SectionHeader
        title={contactContent.title}
        description={contactContent.description}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
        <ContactCard
          icon={Phone}
          title={contactContent.cards.phone.title}
          description={COMPANY_INFO.businessHours}
          delay={0}
        >
          <p className="text-xl md:text-2xl font-semibold">{COMPANY_INFO.phone}</p>
        </ContactCard>

        <ContactCard
          icon={Mail}
          title={contactContent.cards.email.title}
          description={contactContent.cards.email.description}
          delay={0.1}
        >
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            {contactContent.cards.email.note}
          </p>
        </ContactCard>

        <ContactCard
          icon={MapPin}
          title={contactContent.cards.address.title}
          description={contactContent.cards.address.description}
          delay={0.2}
        >
          <p className="text-sm md:text-base text-muted-foreground">
            〒{COMPANY_INFO.postalCode}
            <br />
            {COMPANY_INFO.address}
            <br />
            {COMPANY_INFO.building}
          </p>
        </ContactCard>
      </div>

      <div className="max-w-3xl mx-auto">
        <SecureContactForm />
      </div>
    </SectionWrapper>
  );
}
