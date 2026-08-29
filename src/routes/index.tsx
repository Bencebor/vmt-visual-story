import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/vmt/Nav";
import { Hero } from "@/components/vmt/Hero";
import { Services } from "@/components/vmt/Services";
import { Tailored } from "@/components/vmt/Tailored";
import { WhyVmt } from "@/components/vmt/WhyVmt";
import { Stats } from "@/components/vmt/Stats";
import { Partners } from "@/components/vmt/Partners";
import { VideoWork } from "@/components/vmt/VideoWork";
import { StaticWork } from "@/components/vmt/StaticWork";
import { Process } from "@/components/vmt/Process";
import { About } from "@/components/vmt/About";
import { Reviews } from "@/components/vmt/Reviews";
import { FinalCta } from "@/components/vmt/FinalCta";
import { Contact } from "@/components/vmt/Contact";
import { Footer } from "@/components/vmt/Footer";

const TITLE = "VMT – Visual Media Team | Tartalom, ami dolgozik a cégedért";
const DESCRIPTION =
  "Videó, fotó, social media és marketing egy csapatban. Havi tartalom- és marketingrendszer kis- és középvállalkozásoknak, személyre szabva.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "hu_HU" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Tailored />
        <WhyVmt />
        <Stats />
        <Partners />
        <VideoWork />
        <StaticWork />
        <Process />
        <About />
        <Reviews />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
