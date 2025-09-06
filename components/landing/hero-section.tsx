"use client";

import Link from "next/link";
import { Section } from "../global/section";
import { TypographyH1 } from "../typography/typography-h1";
import { TypographyLead } from "../typography/typography-lead";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <Section>
      <div
        id="hero-section"
        className="max-w-2xl mx-auto text-center space-y-4"
      >
        <TypographyH1>One Original Design Every Day</TypographyH1>
        <TypographyLead>
          Inspira is your daily drop of fresh, hand-crafted design inspiration
          created to spark ideas and fuel creativity without the clutter.
        </TypographyLead>
        <Button asChild className="mt-4">
          <Link href="/inspira">Start Exploring</Link>
        </Button>
      </div>
    </Section>
  );
}
