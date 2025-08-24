import { AspectRatio } from "./aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Skeleton } from "./skeleton";

export function SkeletonFeedAppPrimary() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="pt-0">
          <CardContent className="p-0">
            <AspectRatio ratio={16 / 9}>
              <Skeleton className="w-full h-full rounded-none rounded-t-xl" />
            </AspectRatio>
          </CardContent>

          <CardHeader>
            <CardTitle>
              <Skeleton className="h-5 w-3/4" />
            </CardTitle>

            <CardDescription>
              <Skeleton className="h-4 w-1/2" />
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex flex-col items-start gap-2 w-full">
            <div className="flex flex-wrap gap-2 w-full">
              <Skeleton className="h-5 w-12 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>

            <Skeleton className="h-4 w-24" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
