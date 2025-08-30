"use client";

import {
  Card,
  CardAction,
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
import { SkeletonFeedAppPrimary } from "./ui/skeletion-feed-app-primary";
import { ErrorState } from "./error-state";

export function FeedAppPrimary() {
  const [designs, setDesigns] = useState<Design[] | null>(null);
  const [designDataFetchingTimeout, setDesignDataFetchingTimeout] =
    useState(false);

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const data = await getDesigns();
        setDesigns(data);
      } catch (err) {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {isLoading ? (
            <SkeletonFeedAppPrimary />
          ) : (
            designs.map((design) => (
              <Card key={design.id} className="pt-0">
                <CardContent className="p-0">
                  <Image
                    src={design.image_storage_bucket_url}
                    alt={design.title}
                    width={800}
                    height={450}
                    sizes="100vw"
                    className="rounded-t-xl object-cover w-full h-auto"
                  />
                </CardContent>

                <CardHeader>
                  <CardTitle>{design.title}</CardTitle>
                  <CardDescription>{design.short_description}</CardDescription>
                </CardHeader>

                <CardFooter className="flex flex-col items-start gap-2 w-full">
                  <div className="flex flex-wrap gap-2 w-full">
                    {design.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {design.original_href && (
                    <CardAction>
                      <Button asChild variant="link" className="p-0" size="sm">
                        <Link
                          href={design.original_href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Original
                        </Link>
                      </Button>
                    </CardAction>
                  )}

                  <div className="text-sm text-muted-foreground w-full text-right">
                    - {design.author}
                  </div>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      )}
    </Section>
  );
}
