"use client";

export function TypographyH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-3xl font-semibold tracking-tight text-balance">
      {children}
    </h2>
  );
}
