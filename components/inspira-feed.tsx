"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Section } from "./section";
import { useEffect, useState } from "react";
import { Design } from "@/types/design.types";
import { getDesigns } from "@/utils/supabase/get-designs";
import { Button } from "./ui/button";
import Link from "next/link";
import { SkeletonFeedAppPrimary } from "./skeletion-feed-app-primary";
import { ErrorState } from "./error-state";
import { Download } from "lucide-react";

export function InspiraFeed() {
  const [designs, setDesigns] = useState<Design[] | null>(null);
  const [designDataFetchingTimeout, setDesignDataFetchingTimeout] =
    useState(false);

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const data = await getDesigns();
        setDesigns(data);
      } catch (err) {
        console.error("Error fetching designs:", err);
        setDesigns([]);
      }
    };

    fetchDesigns();
  }, []);

  const isLoading = designs === null || designs.length === 0;

  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setDesignDataFetchingTimeout(true);
      }, 10000);

      return () => clearTimeout(timeout);
    } else {
      setDesignDataFetchingTimeout(false);
    }
  }, [isLoading]);

  return (
    <Section>
      {designDataFetchingTimeout ? (
        <ErrorState />
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {isLoading ? (
            <SkeletonFeedAppPrimary />
          ) : (
            designs.map((design) => (
              <Card
                key={design.id}
                className="pt-0 overflow-hidden shadow-md transition break-inside-avoid"
              >
                <CardContent className="p-0 relative">
                  <Image
                    src={design.media_storage_bucket_url}
                    alt={design.title}
                    width={800}
                    height={450}
                    sizes="100vw"
                    priority={
                      designs.length > 0 ? designs[0].id === design.id : false
                    }
                    className="rounded-t-2xl object-cover w-full h-auto"
                  />

                  <div className="absolute top-2 right-2">
                    <Button asChild variant="outline">
                      <Link
                        href={`/api/download?file=${encodeURIComponent(
                          design.media_storage_bucket_url
                        )}`}
                        download
                        aria-label={`Download ${design.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-5 h-5 text-primary" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>

                <CardHeader className="space-y-2">
                  <CardTitle className="line-clamp-1">{design.title}</CardTitle>

                  {design.description && (
                    <CardDescription>{design.description}</CardDescription>
                  )}

                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="px-2 py-1 rounded-md bg-white/10">
                      {design.category}
                    </span>

                    <span className="px-2 py-1 rounded-md bg-white/10">
                      {design.license}
                    </span>
                  </div>
                </CardHeader>

                <CardFooter className="flex flex-col items-start gap-3 w-full">
                  {design.tags && design.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {design.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {design.ai_prompt && (
                    <blockquote className="text-xs italic text-muted-foreground">
                      “{design.ai_prompt}”
                    </blockquote>
                  )}

                  {design.href && (
                    <Button asChild variant="link" className="p-0" size="sm">
                      <Link
                        href={design.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Original
                      </Link>
                    </Button>
                  )}

                  <div className="flex justify-between w-full text-xs text-muted-foreground">
                    <span>{design.creator}</span>

                    <span>
                      {design.updated_at
                        ? `Updated: ${new Date(
                            design.updated_at
                          ).toLocaleDateString()}`
                        : design.created_at
                        ? `Created: ${new Date(
                            design.created_at
                          ).toLocaleDateString()}`
                        : null}
                    </span>
                  </div>

                  <Button asChild size="sm" className="mt-2">
                    <Link
                      href={`/api/download?file=${encodeURIComponent(
                        design.media_storage_bucket_url
                      )}`}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      )}
    </Section>
  );
}
