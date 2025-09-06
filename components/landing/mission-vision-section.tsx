"use client";

import { Section } from "../global/section";
import { SectionChild } from "../global/section-child";
import { TypographyH2 } from "../typography/typography-h2";
import { TypographySmall } from "../typography/typography-small";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Palette, Users } from "lucide-react";

export function MissionVisionSection() {
  return (
    <Section>
      <SectionChild>
        <TypographyH2>Mission & Vision</TypographyH2>

        <div className="grid gap-6 sm:grid-cols-2 text-left">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                Mission
              </CardTitle>
            </CardHeader>

            <CardContent>
              <TypographySmall>
                Inspira began as a way to stay motivated as a designer and share
                that spark with fellow creatives. It also acts as my personal
                design portfolio, not in the traditional sense, but as a living
                stream of work where I&apos;m the sole publisher. Every drop
                reflects both practice and passion.
              </TypographySmall>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Vision
              </CardTitle>
            </CardHeader>

            <CardContent>
              <TypographySmall>
                To grow Inspira into a trusted source of daily creativity,
                inspiring designers everywhere, while showcasing the harmony
                between design, development, and AI-driven imagination. The goal
                is simple: make inspiration a habit, not a hunt.
              </TypographySmall>
            </CardContent>
          </Card>
        </div>
      </SectionChild>
    </Section>
  );
}
