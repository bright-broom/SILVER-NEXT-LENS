'use client';

import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import { type HistoryItem } from './types';
import { OTHER_IMAGES } from '@/lib/assets';

const historyData: HistoryItem[] = [
  {
    title: '2023',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          MY HYOGO MOVIE 2022 グランプリ受賞<br />
          国際短編映画祭ショートショートフィルムフェスティバル&アジア 2024 ノンフィクション部門 ショートリスト選出
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={OTHER_IMAGES.myhyogo}
            alt="2023年の活動"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <Image
            src={OTHER_IMAGES.arino}
            alt="2023年の活動"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: '2020-2022',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          仙北インターナショナルドローンフィルムフェスティバル<br />
          2020 請川博一審査員特別賞<br />
          2021 市長賞受賞<br />
          NO BORDERS PROJECT Director of Videographyとして海外撮影プロジェクトを展開<br />
          - 西アフリカ ベナン共和国<br />
          - 南アジア インド
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=3540&auto=format&fit=crop"
            alt="海外プロジェクト"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <Image
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=3540&auto=format&fit=crop"
            alt="海外プロジェクト"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: '2017-2019',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          2017年11月 SilverNextLens 映像制作事業部設立<br />
          JUIDA操縦技能証明ライセンス取得<br />
          JUIDA安全運航管理者資格取得<br />
          JUIDA認定スクール講師として活動開始<br />
          仙北インターナショナルドローンフィルムフェスティバル 2018 短編部門優秀賞
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=3540&auto=format&fit=crop"
            alt="事業部設立"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <Image
            src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=3540&auto=format&fit=crop"
            alt="ドローン講師"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: '1995',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          株式会社フィールドコム設立<br />
          地域に根ざした事業展開を開始
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=3540&auto=format&fit=crop"
            alt="会社設立"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=3540&auto=format&fit=crop"
            alt="事業開始"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          />
        </div>
      </div>
    ),
  },
];

export default function History() {
  return (
    <SectionWrapper gradient="none">
      <Timeline data={historyData} />
    </SectionWrapper>
  );
}
