import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Hook } from "@/components/site/hook";
import { Manifesto } from "@/components/site/manifesto";
import { System } from "@/components/site/system";
import { Split } from "@/components/site/split";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Hook />
        <Manifesto />
        <System />
        <Split />
        {/* Sezioni successive: Lavori → Recensioni → Tier → FAQ → Footer */}
      </main>
    </>
  );
}
