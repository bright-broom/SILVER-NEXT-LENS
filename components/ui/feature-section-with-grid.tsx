"use client";

import Image from "next/image";
import { NEWS_IMAGES } from "@/lib/assets";

const newsData = [
  {
    date: "2023年12月17日",
    title: "アジア国際子ども映画祭 in 南あわじ",
    description: "南あわじの子どもたちと映画制作に携わりました。",
    link: "https://asianfilm.chu.jp/",
    thumbnail: NEWS_IMAGES.news1,
  },
  {
    date: "2023年11月19日",
    title: "南あわじ市総合防災訓練 ドローン中継訓練",
    description: "防災訓練でドローン中継を担当しました。",
    link: "https://youtube.com/live/K8Ngyeci2vo",
    thumbnail: NEWS_IMAGES.news2,
  },
  {
    date: "2023年10月19日",
    title: "日テレ「世界一受けたい授業」映像提供",
    description: "渦潮のドローン映像を提供しました。",
    link: "https://www.ntv.co.jp/sekaju/",
    thumbnail: NEWS_IMAGES.news3,
  },
  {
    date: "2023年7月4日",
    title: "テレビ朝日「マツコ＆有吉 かりそめ天国」映像提供",
    description: "番組に特別映像を提供しました。",
    link: "https://www.tv-asahi.co.jp/matsuari/",
    thumbnail: NEWS_IMAGES.news4,
  },
  {
    date: "2023年10月2日",
    title: "第16回アジア国際子ども映画祭 関西・四国ブロック大会",
    description: "湊地区公民館での映画祭に参加しました。",
    link: "https://www.city.minamiawaji.hyogo.jp/soshiki/jyouhou/r0506-shisei1.html",
    thumbnail: NEWS_IMAGES.news5,
  },
  {
    date: "2023年6月10日",
    title: "NO BORDERS PROJECT インド 帰国",
    description: "インドでの撮影プロジェクトを完了しました。",
    link: "https://unityspace.org/no-borders-project/",
    thumbnail: NEWS_IMAGES.news6,
  },
  {
    date: "2023年6月8日",
    title: "兵庫県 県民だより 撮影",
    description: "沼島の上立神岩をドローンで撮影しました。",
    link: null,
    thumbnail: NEWS_IMAGES.news7,
  },
  {
    date: "2023年5月8日",
    title: "兵庫テロワール旅 ポスターと冊子の撮影",
    description: "沼島の美しい風景を空撮しました。",
    link: null,
    thumbnail: NEWS_IMAGES.news8,
  },
  {
    date: "2023年1月31日",
    title: "NHK土曜ドラマ『探偵ロマンス』 空撮",
    description: "最終話の空撮を担当しました。",
    link: "https://www2.nhk.or.jp/archives/movies/?id=D0009051524_00000",
    thumbnail: NEWS_IMAGES.news9,
  },
];

export default function NewsSection() {
  return (
    <section className="section-base section-gradient-1 w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 items-center text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter">
              News
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground">
              映像制作やイベントの最新情報をお届けします。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 bg-white/50 dark:bg-black/50 p-4 rounded-lg shadow-md relative cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => {
                  if (news.link) {
                    window.open(news.link, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  width={400}
                  height={250}
                  className="rounded-md object-cover w-full h-52"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <h3 className="text-xl font-semibold tracking-tight">{news.title}</h3>
                <p className="text-sm text-gray-500">{news.date}</p>
                <p className="text-muted-foreground text-sm">{news.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
