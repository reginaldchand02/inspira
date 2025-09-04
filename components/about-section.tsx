"use client";

import { Section } from "./section";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Link from "next/link";
import { Palette, Code2, Sparkles } from "lucide-react";
import { TypographyH2 } from "./typography-h2";
import { TypographyP } from "./typography-p";

export function AboutSection() {
  return (
    <Section>
      <div className="mx-auto max-w-5xl space-y-10 text-center">
        <div className="space-y-4 max-w-3xl mx-auto">
          <TypographyH2>About Inspira</TypographyH2>
          <TypographyP>
            Inspira isn&apos;t just a feed, it&apos;s a daily ritual of design.
            Every original creation is curated and crafted by Reginald Sahil
            Chand, delivering a fresh spark of inspiration to fuel your ideas
            and creativity.
          </TypographyP>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 text-left">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-inspira-design-primary" />
                Design
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                A showcase of creativity and craft, presented as a daily ritual
                of fresh inspiration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-inspira-development-secondary" />
                Development
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                A reliable platform built to deliver design consistently,
                simple, focused, and fast.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-inspira-ai-accent" />
                AI
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                A creative partner in the process, blending imagination with
                AI-driven idea generation and refinement.
              </p>
            </CardContent>
          </Card>
        </div>

        <Button asChild>
          <Link href="/inspira">See Today&apos;s Drop</Link>
        </Button>
      </div>
    </Section>
  );
}
