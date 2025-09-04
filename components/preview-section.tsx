"use client";

import { Section } from "./section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function PreviewSection() {
  return (
    <Section>
      <div className="rounded-2xl border bg-muted/20 p-2 sm:p-3">
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl">
          <Image
            src="/inspira-feed-view.png"
            alt="Preview of the Inspira feed showing daily design drops"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 960px"
            className="object-cover"
          />
        </AspectRatio>
      </div>
    </Section>
  );
}
