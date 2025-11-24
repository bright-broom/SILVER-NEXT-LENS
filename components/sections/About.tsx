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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
        <div className="glass-card rounded-3xl p-8 md:p-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            {COMPANY_INFO.name}
          </h3>
          <div className="space-y-5 md:space-y-6 text-slate-700 dark:text-slate-300 text-base md:text-lg">
            <p>
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                {aboutContent.labels.company}
              </strong>
              {COMPANY_INFO.company}
            </p>
            <p>
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                {aboutContent.labels.address}
              </strong>
              {COMPANY_INFO.fullAddress}
            </p>
            <p>
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                {aboutContent.labels.phone}
              </strong>
              {COMPANY_INFO.phone}
            </p>
            <p>
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                {aboutContent.labels.fax}
              </strong>
              {COMPANY_INFO.fax}
            </p>
          </div>
        </div>

        <div className="space-y-8 md:space-y-10">
          <div className="flex items-start gap-5 md:gap-6 glass-card rounded-2xl p-6 md:p-8 group hover:shadow-xl transition-all duration-500">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-500">
              <Calendar className="w-7 h-7 md:w-8 md:h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                {aboutContent.labels.established}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                {COMPANY_INFO.established.company}
                <br />
                {COMPANY_INFO.established.division}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 md:gap-6 glass-card rounded-2xl p-6 md:p-8 group hover:shadow-xl transition-all duration-500">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-500">
              <Users className="w-7 h-7 md:w-8 md:h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                {aboutContent.labels.representatives}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                {COMPANY_INFO.representatives.president}
                <br />
                {COMPANY_INFO.representatives.divisionHead}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 md:gap-6 glass-card rounded-2xl p-6 md:p-8 group hover:shadow-xl transition-all duration-500">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-500">
              <Award className="w-7 h-7 md:w-8 md:h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                {aboutContent.labels.associations}
              </h4>
              <ul className="text-slate-600 dark:text-slate-300 text-base md:text-lg list-disc list-inside space-y-2">
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
