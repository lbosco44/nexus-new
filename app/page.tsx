import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Hook } from "@/components/site/hook";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Hook />
        {/* Sezioni successive: Manifesto → Sistema → Split → Lavori → Recensioni → Tier → FAQ → Footer */}
      </main>
    </>
  );
}
