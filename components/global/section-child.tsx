"use client";

export function SectionChild({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-5xl space-y-10 text-center">
      {children}
    </section>
  );
}
