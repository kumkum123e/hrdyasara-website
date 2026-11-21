
import type { Metadata } from "next";

import MeetSaraHero from "@/components/about/MeetSaraHero";
import SaraLifeTimeline from "@/components/about/SaraLifeTimeline";

export const metadata: Metadata = {
  title: "Meet Sara | HrdyaSara Foundation",

  description:
    "Discover Sara J. Godwin's inspiring life journey, precious childhood memories and the love behind HrdyaSara Foundation.",
};

export default function MeetSaraPage() {
  return (
    <main>
      <MeetSaraHero />
      <SaraLifeTimeline />
    </main>
  );
}
