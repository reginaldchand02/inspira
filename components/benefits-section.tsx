"use client";

import { Section } from "./section";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Download, Sparkles, Wand2, FileText } from "lucide-react";
import { TypographyH2 } from "./typography-h2";

export function BenefitsSection() {
  return (
    <Section>
      <div className="mx-auto max-w-5xl space-y-10 text-center">
        <TypographyH2>Benefits</TypographyH2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 text-left">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                Downloadable Artwork
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Every design can be downloaded, not just viewed. You&apos;ll
                always have access to the final polished file, ready to use in
                your projects.
              </p>
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
              <p className="text-sm text-muted-foreground">
                Each drop comes with its original AI prompt. Feed it into your
                own AI workflow to experiment, remix, or spark something new.
              </p>
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
              <p className="text-sm text-muted-foreground">
                Pure AI-generated imagery like wallpapers can be downloaded and
                used directly. Mixed or custom-refined designs are delivered as
                finished files, more than just raw AI output.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                AI Blogs & Weekly Emails
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Inspira generates insightful AI blogs and fully automated weekly
                emails, no human intervention. Stay inspired effortlessly.
              </p>
            </CardContent>
          </Card>
        </div>

        <Button asChild>
          <Link href="/inspira">Start Exploring</Link>
        </Button>
      </div>
    </Section>
  );
}
