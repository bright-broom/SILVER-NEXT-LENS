// =============================
// Home.tsx
// トップページのルートコンポーネント
// =============================
import Hero from "@/components/sections/Hero"
import { Concept } from "@/components/sections/Concept"
import { News } from "@/components/sections/News"
import Services from "@/components/sections/Services"
import Video from "@/components/sections/Video"
import Movies from "@/components/sections/Movies"
import About from "@/components/sections/About"
import Team from "@/components/sections/Team"
import History from "@/components/sections/History"
import Clients from "@/components/sections/Clients"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

// =============================
// セクションコンポーネントを配列で管理
// 必要な順番で並び替え可能
// =============================
const sections = [
  Hero,
  Concept,
  Services,
  Video,
  Movies,
  Team,
  History,
  About,
  Clients,
  News,
  Contact,
  Footer,
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden m-0 p-0">
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </main>
  )
}