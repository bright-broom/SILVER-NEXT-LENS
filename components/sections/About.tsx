'use client';

import { Calendar, Users, Award } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import { COMPANY_INFO } from '@/lib/constants';

export default function About() {
  return (
    <SectionWrapper contentClassName="max-w-4xl mx-auto">
      <SectionHeader title="会社概要" />

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-heading-3 mb-4">{COMPANY_INFO.name}</h3>
          <div className="space-y-4 text-muted-foreground text-body">
            <p>
              <strong>運営会社：</strong>
              {COMPANY_INFO.company}
            </p>
            <p>
              <strong>所在地：</strong>
              {COMPANY_INFO.fullAddress}
            </p>
            <p>
              <strong>TELL：</strong>
              {COMPANY_INFO.phone}
            </p>
            <p>
              <strong>FAX：</strong>
              {COMPANY_INFO.fax}
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Calendar className="w-6 h-6 text-primary mt-1" />
            <div>
              <h4 className="text-heading-4 mb-2">設立</h4>
              <p className="text-muted-foreground text-body">
                {COMPANY_INFO.established.company}
                <br />
                {COMPANY_INFO.established.division}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 text-primary mt-1" />
            <div>
              <h4 className="text-heading-4 mb-2">代表者</h4>
              <p className="text-muted-foreground text-body">
                {COMPANY_INFO.representatives.president}
                <br />
                {COMPANY_INFO.representatives.divisionHead}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Award className="w-6 h-6 text-primary mt-1" />
            <div>
              <h4 className="text-heading-4 mb-2">加盟団体</h4>
              <ul className="text-muted-foreground text-body list-disc list-inside">
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
