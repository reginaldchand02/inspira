"use client";

import { Section } from "../global/section";
import { SectionChild } from "../global/section-child";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { TypographyH2 } from "../typography/typography-h2";
import { TypographySmall } from "../typography/typography-small";
import {
  HeartHandshake,
  Rocket,
  Mail,
  Share2,
  Facebook,
  Instagram,
  Github,
  Phone,
  Camera,
  Music2,
  MapPin,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

export function ThankYouSection() {
  return (
    <Section>
      <SectionChild>
        <TypographyH2>Thank You</TypographyH2>

        <div
          id="thankyou-section"
          className="grid gap-6 sm:grid-cols-2 text-left"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-primary" />
                About Inspira
              </CardTitle>
            </CardHeader>

            <CardContent>
              <TypographySmall>
                Inspira isn&apos;t just another random app, it&apos;s designed
                to bring real inspiration into daily life. It helps spark ideas,
                motivate creativity, and provide value to people who need that
                extra push to keep moving forward. The goal has always been to
                make something worth using, not just building for the sake of
                it.
              </TypographySmall>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                Inspira as a Project
              </CardTitle>
            </CardHeader>

            <CardContent>
              <TypographySmall>
                Inspira reflects the combination of my skills as both a
                developer and a graphic designer. It showcases Android
                development with React Native, modern web dev using Next.js,
                Shadcn, Tailwind, and TypeScript, all tied together with a
                design-first mindset. <br />
                <br />
                It&apos;s not a dead repo, it&apos;s a living project that
                pushes me to level up, create fresh designs, and keep building
                something I actually use, while also strengthening my GitHub
                portfolio.
              </TypographySmall>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Contact Me
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">
                <TypographySmall>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <Link
                      href="mailto:reginaldchand02@gmail.com"
                      className="underline"
                    >
                      reginaldchand02@gmail.com
                    </Link>
                  </div>
                </TypographySmall>

                <TypographySmall>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <Link href="tel:+6799334253" className="underline">
                      +679 933 4253
                    </Link>
                  </div>
                </TypographySmall>

                <TypographySmall>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Fiji Islands, Suva Central</span>
                  </div>
                </TypographySmall>

                <TypographySmall>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>Senior Graphic Designer</span>
                  </div>
                </TypographySmall>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-primary" />
                Follow Me
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">
                <TypographySmall>
                  <Link
                    href="https://www.facebook.com/reginaldchand02"
                    className="flex items-center gap-2 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-4 h-4 text-primary" />
                    <span>Facebook: reginaldchand02</span>
                  </Link>
                </TypographySmall>

                <TypographySmall>
                  <Link
                    className="flex items-center gap-2 underline"
                    href="https://www.instagram.com/reginald.chand02"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4 text-primary" />
                    <span>Instagram: reginald.chand02</span>
                  </Link>
                </TypographySmall>

                <TypographySmall>
                  <Link
                    className="flex items-center gap-2 underline"
                    href="https://www.tiktok.com/@reginaldchand02"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Music2 className="w-4 h-4 text-primary" />
                    <span>TikTok: reginaldchand02</span>
                  </Link>
                </TypographySmall>

                <TypographySmall>
                  <Link
                    className="flex items-center gap-2 underline"
                    href="https://github.com/reginaldchand02"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 text-primary" />
                    <span>GitHub: reginaldchand02</span>
                  </Link>
                </TypographySmall>

                <TypographySmall>
                  <Link
                    className="flex items-center gap-2 underline"
                    href="https://wa.me/6799334253"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span>WhatsApp: +679 933 4253</span>
                  </Link>
                </TypographySmall>

                <TypographySmall>
                  <Link
                    className="flex items-center gap-2 underline"
                    href="https://www.snapchat.com/add/reginaldchand02"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Camera className="w-4 h-4 text-primary" />
                    <span>Snapchat: reginaldchand02</span>
                  </Link>
                </TypographySmall>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionChild>
    </Section>
  );
}
