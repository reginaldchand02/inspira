"use client";

import { Section } from "./section";
import { TypographyH1 } from "./typography-h1";
import { TypographyLead } from "./typography-lead";

export function HeroSection() {
  const isSignedIn = false;
  const user = { firstName: "Reginald" };

  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center space-y-4">
        {isSignedIn ? (
          <>
            <TypographyH1>Welcome back, {user.firstName} 👋</TypographyH1>
            <TypographyLead>
              Inspira is ready for you. Your daily design dose, fresh ideas to
              explore and enjoy. Let your creativity flow.
            </TypographyLead>
          </>
        ) : (
          <>
            <TypographyH1>Discover Inspira</TypographyH1>
            <TypographyLead>
              Dive into a daily stream of curated design inspiration. Simple,
              fresh, and ready to spark your creativity.
            </TypographyLead>
          </>
        )}
      </div>
    </Section>
  );
}
