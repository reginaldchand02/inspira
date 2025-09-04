"use client";

import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { Loader } from "@/components/loader";
import { PreviewSection } from "@/components/preview-section";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeroSection />
          <PreviewSection />
          <AboutSection />
        </>
      )}
    </Suspense>
  );
}
