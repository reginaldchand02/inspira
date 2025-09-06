"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { LogoBrand } from "./logo-brand";

export function HeaderPrimary() {
  return (
    <header className="max-w-7xl w-[90%] sm:w-[70%] md:w-1/2 mx-auto h-16 p-5 pl-2 sticky inset-0 top-5 mb-16 flex items-center justify-between backdrop-blur-md bg-background/40 rounded-full z-50">
      <Link href={"/"} className="flex items-center gap-2.5 group">
        <div className="w-12 h-12">
          <LogoBrand />
        </div>

        <span className="bg-gradient-to-r from-[var(--inspira-design-primary)] via-[var(--inspira-development-secondary)] to-[var(--inspira-ai-accent)] bg-clip-text text-transparent group-hover:from-[var(--inspira-ai-accent)] group-hover:via-[var(--inspira-development-secondary)] group-hover:to-[var(--inspira-design-primary)] transition-all">
          Inspira
        </span>
      </Link>

      <nav className="flex items-center gap-5">
        <Link
          href={"/"}
          className="font-light hover:text-inspira-spark-highlight transition-colors"
        >
          Home
        </Link>

        <Link
          href={"https://github.com/reginaldchand02/inspira"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="font-light hover:text-inspira-spark-highlight transition-colors"
        >
          <Github />
        </Link>
      </nav>
    </header>
  );
}
