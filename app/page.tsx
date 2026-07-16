import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import {
  Who,
  Money,
  Features,
  Steps,
  Quote,
  Faq,
  CtaFinal,
  Footer,
} from "@/components/sections";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Who />
      <Money />
      <Features />
      <Steps />
      <Quote />
      <Faq />
      <CtaFinal />
      <Footer />
    </>
  );
}
