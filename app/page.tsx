import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Hook } from "@/components/site/hook";
import { Manifesto } from "@/components/site/manifesto";
import { System } from "@/components/site/system";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Hook />
        <Manifesto />
        <System />
        {/* Sezioni successive: Split → Lavori → Recensioni → Tier → FAQ → Footer */}
      </main>
    </>
  );
}
