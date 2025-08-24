import Image from "next/image";

export function Loader() {
  return (
    <section
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background cursor-none select-none"
      aria-busy="true"
      aria-label="Loading"
      role="status"
    >
      <Image
        src="/logo-brand.svg"
        alt="Loading..."
        width={128}
        height={128}
        priority
        className="animate-spin pointer-events-none select-none"
        draggable={false}
      />
    </section>
  );
}
