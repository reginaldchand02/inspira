"use client";

export function TypographyH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-center text-4xl font-bold tracking-tight text-balance">
      {children}
    </h1>
  );
}
