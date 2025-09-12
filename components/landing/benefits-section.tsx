"use client";

import { Section } from "../global/section";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Download, Sparkles, Wand2, Smartphone } from "lucide-react";
import { TypographyH2 } from "../typography/typography-h2";
import { TypographySmall } from "../typography/typography-small";
import { SectionChild } from "../global/section-child";

export function BenefitsSection() {
  return (
    <Section>
      <SectionChild>
        <TypographyH2>Benefits</TypographyH2>

        <div
          id="benefits-section"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 text-left"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                Downloadable Artwork
              </CardTitle>
            </CardHeader>

            <CardContent>
              <TypographySmall>
                Every design can be downloaded, not just viewed. You&apos;ll
                always have access to the final polished file, ready to use in
                your projects.
              </TypographySmall>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Prompts Included
              </CardTitle>
            </CardHeader>

            <CardContent>
              <TypographySmall>
                Each drop comes with its original AI prompt. Feed it into your
                own AI workflow to experiment, remix, or spark something new.
              </TypographySmall>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-primary" />
                Use It Your Way
              </CardTitle>
            </CardHeader>

            <CardContent>
              <TypographySmall>
                Pure AI-generated imagery like wallpapers can be downloaded and
                used directly. Mixed or custom-refined designs are delivered as
                finished files, more than just raw AI output.
              </TypographySmall>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                Mobile Platform Support
              </CardTitle>
            </CardHeader>

            <CardContent>
              <TypographySmall>
                Inspira is fully supported on mobile through React Native,
                tested and optimized for Android. Seamless performance, right in
                your pocket.
              </TypographySmall>
            </CardContent>
          </Card>
        </div>

        <Button asChild>
          <Link href="/inspira">Start Exploring</Link>
        </Button>
      </SectionChild>
    </Section>
  );
}
