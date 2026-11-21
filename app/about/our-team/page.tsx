
import type { Metadata } from "next";

import OurTeamHero from "@/components/about/OurTeamHero";
import FounderProfile from "@/components/about/FounderProfile";
import CoreMembers from "@/components/about/CoreMembers";
import CommunityCarousel from "@/components/about/CommunityCarousel";

export const metadata: Metadata = {
  title: "Our Team | HrdyaSara Foundation",
  description:
    "Meet the founder, core members and community of HrdyaSara Foundation.",
};

export default function OurTeamPage() {
  return (
    <main>
      <OurTeamHero />
      <FounderProfile />
      <CoreMembers />
      <CommunityCarousel />
    </main>
  );
}
