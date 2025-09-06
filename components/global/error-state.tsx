"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

type ErrorStateProps = {
  title?: string;
  description?: string;
};

export function ErrorState({
  title = "Sorry, we couldn't load design content.",
  description = "There was a problem loading design inspirations. Please refresh your browser (Ctrl+R) and try again.",
}: ErrorStateProps) {
  return (
    <Alert
      variant="destructive"
      role="alert"
      aria-live="polite"
      className="max-w-md"
    >
      <AlertCircle />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
