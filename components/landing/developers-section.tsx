"use client";

import { Section } from "../global/section";
import { SectionChild } from "../global/section-child";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { TypographyH2 } from "../typography/typography-h2";
import { TypographySmall } from "../typography/typography-small";
import { Button } from "../ui/button";
import Link from "next/link";
import { Code2, User } from "lucide-react";

export function DeveloperSection() {
  return (
    <Section>
      <SectionChild>
        <TypographyH2>Developer</TypographyH2>

        <div
          id="developer-section"
          className="grid gap-6 sm:grid-cols-2 text-left"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                About the Developer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TypographySmall>
                Inspira is built and maintained by{" "}
                <strong>Reginald Sahil Chand</strong>, a multidisciplinary
                creator with expertise in design, frontend & backend
                development, AI prompt engineering, and content creation. His
                vision is to blend creativity with technology to inspire new
                ways of thinking and building.
              </TypographySmall>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                Skills & Craft
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TypographySmall>
                Reginald&apos;s skills span graphic and UI/UX design, full-stack
                and modern web development, React Native, and photography. He
                combines traditional design fundamentals with forward-thinking
                digital innovation.
              </TypographySmall>
            </CardContent>
          </Card>
        </div>

        <Button asChild>
          <Link
            href="https://github.com/reginaldchand02/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reginald&apos;s GitHub
          </Link>
        </Button>
      </SectionChild>
    </Section>
  );
}
