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

function Footer() {
  return (
    <footer className="section-base section-gradient-1 relative border-t border-gray-200/50 text-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* お問い合わせ */}
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight">お問い合わせ</h2>
            <p className="mb-6 text-gray-500">
              最新情報やお得な情報をメールでお届けします。
            </p>
            <SecureNewsletterForm />
          </div>

          {/* サービス一覧 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">サービス</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-gray-900">プロモーション映像制作</a>
              <a href="#" className="block transition-colors hover:text-gray-900">企業・ブランドムービー</a>
              <a href="#" className="block transition-colors hover:text-gray-900">個人向け映像制作</a>
              <a href="#" className="block transition-colors hover:text-gray-900">ドローン空撮</a>
              <a href="#" className="block transition-colors hover:text-gray-900">テレビ・メディア映像提供</a>
              <a href="#" className="block transition-colors hover:text-gray-900">映像コンサルティング</a>
            </nav>
          </div>

          {/* 会社情報 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">会社情報</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>〒656-0122</p>
              <p>南あわじ市広田広田365-2</p>
              <p>山岡オフィスビル3F</p>
              <p>TEL：0799-45-2377</p>
              <p>FAX：0799-45-2378</p>
            </address>
          </div>

          {/* SNS */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">SNS</h3>
            <div className="flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                      <Facebook className="h-5 w-5 text-gray-700 hover:text-blue-600" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Facebookでフォロー</p></TooltipContent>
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
                  <TooltipContent><p>Twitterでフォロー</p></TooltipContent>
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
                  <TooltipContent><p>Instagramでフォロー</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* 著作権とリンク */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SilverNextLens. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-gray-900">プライバシーポリシー</a>
            <a href="#" className="transition-colors hover:text-gray-900">利用規約</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
