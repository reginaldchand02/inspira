"use client";

import { Section } from "./section";
import { TypographyH2 } from "./typography-h2";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import {
  Sparkles,
  Archive,
  Github,
  Layers,
  Smartphone,
  Quote,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl space-y-10 text-center">
        <TypographyH2>Features</TypographyH2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />1 New Design Daily
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Every single day, Inspira delivers a brand-new original design,
                a consistent ritual of fresh inspiration to fuel your creative
                process.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Quote className="w-5 h-5 text-primary" />
                Prompt Transparency
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Each design includes its AI prompt, letting you learn, remix, or
                spark new ideas straight from the source.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Archive className="w-5 h-5 text-primary" />
                Permanent Archive
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                No design is ever deleted. Past drops stay open, browsable, and
                part of the growing library of inspiration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="w-5 h-5 text-primary" />
                Open Source & Free
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Inspira is built in public. The entire codebase is open-source,
                free to explore, contribute to, or fork.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                Modern Tech Stack
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Next.js, Tailwind, shadcn/ui, Supabase, and Cloudflare R2,
                lightweight, scalable, and future-ready.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                Mobile Friendly
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Inspira is designed for every screen. Mobile app support is on
                the horizon for an even smoother experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
