"use client";

import { FeedAppPrimary } from "@/components/feed-app-primary";
import { Loader } from "@/components/loader";
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
      {loading ? <Loader /> : <FeedAppPrimary />}
    </Suspense>
  );
}
