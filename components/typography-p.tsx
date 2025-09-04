"use client";

export function TypographyP({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-7 [&:not(:first-child)]:mt-6">{children}</p>
  );
}
