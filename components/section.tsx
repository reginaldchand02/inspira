export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-7xl w-full mx-auto mt-32 px-5 md:px-10 lg:px-15">
      {children}
    </section>
  );
}
