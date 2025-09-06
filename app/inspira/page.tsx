"use client";

import { InspiraFeed } from "@/components/inspira/inspira-feed";
import { InspiraFeedHero } from "@/components/inspira/inspira-feed-hero";

export default function InspiraPage() {
  return (
    <>
      <InspiraFeedHero />
      <InspiraFeed />
    </>
  );
}
