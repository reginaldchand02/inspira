"use client";

import Link from "next/link";
import { Github } from "lucide-react";

export function FooterPrimary() {
  return (
    <footer className="max-w-7xl w-[90%] sm:w-[70%] md:w-1/2 mx-auto mt-16 px-5 md:px-10 lg:px-15 pb-10 bg-background text-center">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 text-xs text-muted-foreground">
        <span>
          &copy; {new Date().getFullYear()} Reginald Sahil Chand · Licensed{" "}
          <Link
            href="https://github.com/reginaldchand02/inspira/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-inspira-spark-highlight transition-colors"
          >
            MIT
          </Link>
        </span>

        <Link
          href="https://github.com/reginaldchand02/inspira"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Inspira Design Repository"
          className="hover:text-inspira-spark-highlight transition-colors"
        >
          <Github className="w-4 h-4" />
        </Link>
      </div>
    </footer>
  );
}
