"use client";

import { Section } from "./section";
import { TypographyH1 } from "./typography-h1";
import { TypographyLead } from "./typography-lead";

export function InspiraFeedHero() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <TypographyH1>Discover Inspira</TypographyH1>
        <TypographyLead>
          Dive into a daily stream of curated design inspiration. Simple, fresh,
          and ready to spark your creativity.
        </TypographyLead>
      </div>
    </Section>
  );
}
