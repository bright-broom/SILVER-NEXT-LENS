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
    <footer className="section-base section-gradient-1 relative border-t border-gray-200/50 text-gray-700 transition-colors duration-300">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* お問い合わせ */}
          <div>
            <h2 className="mb-4 text-xl md:text-2xl font-bold tracking-tight">
              {footerContent.sections.contact.title}
            </h2>
            <p className="mb-6 text-sm md:text-base text-gray-500">
              {newsletterContent.description}
            </p>
            <SecureNewsletterForm />
          </div>

          {/* サービス一覧 */}
          <div>
            <h3 className="mb-4 text-lg md:text-xl font-semibold">
              {footerContent.sections.services.title}
            </h3>
            <nav className="space-y-2 text-sm md:text-base">
              {SERVICES.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="block transition-colors hover:text-gray-900"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* 会社情報 */}
          <div>
            <h3 className="mb-4 text-lg md:text-xl font-semibold">
              {footerContent.sections.company.title}
            </h3>
            <address className="space-y-2 text-sm md:text-base not-italic">
              <p>〒{COMPANY_INFO.postalCode}</p>
              <p>{COMPANY_INFO.address}</p>
              <p>{COMPANY_INFO.building}</p>
              <p>TEL：{COMPANY_INFO.phone}</p>
              <p>FAX：{COMPANY_INFO.fax}</p>
            </address>
          </div>

          {/* SNS */}
          <div>
            <h3 className="mb-4 text-lg md:text-xl font-semibold">
              {footerContent.sections.social.title}
            </h3>
            <div className="flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                      <Facebook className="h-5 w-5 text-gray-700 hover:text-blue-600" />
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
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                      <Twitter className="h-5 w-5 text-gray-700 hover:text-blue-400" />
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
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                      <Instagram className="h-5 w-5 text-gray-700 hover:text-pink-500" />
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
        <div className="mt-8 md:mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200/50 pt-6 md:pt-8 text-center md:flex-row">
          <p className="text-xs md:text-sm text-gray-500">
            © {new Date().getFullYear()} {footerContent.copyright}
          </p>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <a href="#" className="transition-colors hover:text-gray-900">
              {footerContent.links.privacy}
            </a>
            <a href="#" className="transition-colors hover:text-gray-900">
              {footerContent.links.terms}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
