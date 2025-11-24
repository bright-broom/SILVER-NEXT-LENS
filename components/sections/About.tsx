'use client';

import { Calendar, Users, Award } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import { COMPANY_INFO } from '@/lib/constants';
import { about as aboutContent } from '@/lib/content';

export default function About() {
  return (
    <SectionWrapper contentClassName="max-w-4xl mx-auto">
      <SectionHeader title={aboutContent.title} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
            {COMPANY_INFO.name}
          </h3>
          <div className="space-y-4 md:space-y-5 text-muted-foreground text-base md:text-lg">
            <p>
              <strong className="text-foreground">{aboutContent.labels.company}</strong>
              {COMPANY_INFO.company}
            </p>
            <p>
              <strong className="text-foreground">{aboutContent.labels.address}</strong>
              {COMPANY_INFO.fullAddress}
            </p>
            <p>
              <strong className="text-foreground">{aboutContent.labels.phone}</strong>
              {COMPANY_INFO.phone}
            </p>
            <p>
              <strong className="text-foreground">{aboutContent.labels.fax}</strong>
              {COMPANY_INFO.fax}
            </p>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="flex items-start gap-4 md:gap-5">
            <Calendar className="w-6 h-6 md:w-7 md:h-7 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                {aboutContent.labels.established}
              </h4>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {COMPANY_INFO.established.company}
                <br />
                {COMPANY_INFO.established.division}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 md:gap-5">
            <Users className="w-6 h-6 md:w-7 md:h-7 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                {aboutContent.labels.representatives}
              </h4>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {COMPANY_INFO.representatives.president}
                <br />
                {COMPANY_INFO.representatives.divisionHead}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 md:gap-5">
            <Award className="w-6 h-6 md:w-7 md:h-7 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                {aboutContent.labels.associations}
              </h4>
              <ul className="text-muted-foreground text-base md:text-lg list-disc list-inside space-y-1">
                {COMPANY_INFO.associations.map((association, index) => (
                  <li key={index}>{association}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
