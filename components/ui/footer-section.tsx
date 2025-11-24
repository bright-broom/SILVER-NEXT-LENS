'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import SecureNewsletterForm from '@/components/forms/SecureNewsletterForm';
import { COMPANY_INFO, SERVICES, SOCIAL_LINKS } from '@/lib/constants';
import { footer as footerContent, newsletter as newsletterContent } from '@/lib/content';

function Footer() {
  return (
    <footer className="section-base section-gradient-1 relative border-t border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300 transition-colors duration-300">
      <div className="container mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* お問い合わせ */}
          <div>
            <h2 className="mb-6 text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {footerContent.sections.contact.title}
            </h2>
            <p className="mb-8 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {newsletterContent.description}
            </p>
            <SecureNewsletterForm />
          </div>

          {/* サービス一覧 */}
          <div>
            <h3 className="mb-6 text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {footerContent.sections.services.title}
            </h3>
            <nav className="space-y-3 text-base md:text-lg">
              {SERVICES.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="block transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-x-2"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* 会社情報 */}
          <div>
            <h3 className="mb-6 text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {footerContent.sections.company.title}
            </h3>
            <address className="space-y-3 text-base md:text-lg not-italic text-slate-600 dark:text-slate-400">
              <p>〒{COMPANY_INFO.postalCode}</p>
              <p>{COMPANY_INFO.address}</p>
              <p>{COMPANY_INFO.building}</p>
              <p className="pt-2">
                <span className="font-semibold text-slate-900 dark:text-slate-200">TEL：</span>
                {COMPANY_INFO.phone}
              </p>
              <p>
                <span className="font-semibold text-slate-900 dark:text-slate-200">FAX：</span>
                {COMPANY_INFO.fax}
              </p>
            </address>
          </div>

          {/* SNS */}
          <div>
            <h3 className="mb-6 text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {footerContent.sections.social.title}
            </h3>
            <div className="flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full w-12 h-12 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
                    >
                      <Facebook className="h-6 w-6 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{footerContent.sections.social.links.facebook}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full w-12 h-12 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="h-6 w-6 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{footerContent.sections.social.links.twitter}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full w-12 h-12 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
                    >
                      <Instagram className="h-6 w-6 text-slate-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{footerContent.sections.social.links.instagram}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* 著作権とリンク */}
        <div className="mt-12 md:mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-200/50 dark:border-slate-800/50 pt-8 md:pt-10 text-center md:flex-row">
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {footerContent.copyright}
          </p>
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base">
            <a
              href="#"
              className="transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:underline"
            >
              {footerContent.links.privacy}
            </a>
            <a
              href="#"
              className="transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:underline"
            >
              {footerContent.links.terms}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
