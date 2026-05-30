import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Hook } from "@/components/site/hook";
import { Manifesto } from "@/components/site/manifesto";
import { System } from "@/components/site/system";
import { Split } from "@/components/site/split";
import { Works } from "@/components/site/works";
import { Reviews } from "@/components/site/reviews";
import { Tiers } from "@/components/site/tiers";
import { Faq } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";

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
        <Works />
        <Reviews />
        <Tiers />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
