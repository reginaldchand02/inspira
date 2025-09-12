"use client";

import { AboutSection } from "@/components/landing/about-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HeroSection } from "@/components/landing/hero-section";
import { Loader } from "@/components/global/loader";
import { MissionVisionSection } from "@/components/landing/mission-vision-section";
import { PreviewSection } from "@/components/landing/preview-section";
import { Suspense, useEffect, useState } from "react";
import { DeveloperSection } from "@/components/landing/developers-section";
import { ThankYouSection } from "@/components/landing/thank-you-section";

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
          <MissionVisionSection />
          <FeaturesSection />
          <BenefitsSection />
          <DeveloperSection />
          <ThankYouSection />
        </>
      )}
    </Suspense>
  );
}
