"use client";

import { AspectRatio } from "./ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export function SkeletonFeedAppPrimary() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <Card
          key={i}
          className="relative pt-0 overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md shadow-md break-inside-avoid"
        >
          <CardContent className="p-0">
            <AspectRatio ratio={16 / 9}>
              <Skeleton className="w-full h-full rounded-none rounded-t-2xl" />
            </AspectRatio>
          </CardContent>

          <CardHeader className="space-y-2">
            <CardTitle>
              <Skeleton className="h-5 w-3/4" />
            </CardTitle>

            <CardDescription>
              <Skeleton className="h-4 w-2/3" />
            </CardDescription>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <Skeleton className="h-5 w-16 rounded-md" />
              <Skeleton className="h-5 w-20 rounded-md" />
            </div>
          </CardHeader>

          <CardFooter className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-wrap gap-2 w-full">
              <Skeleton className="h-5 w-12 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-10 rounded-full" />
            </div>

            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-24 rounded-md" />

            <div className="flex justify-between w-full text-xs">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
