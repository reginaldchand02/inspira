import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeaderPrimary } from "@/components/global/header-primary";
import { FooterPrimary } from "@/components/global/footer-primary";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inspira",
  description:
    "Inspira delivers a daily drop of original design inspiration. Each piece is created and curated by me (Reginald Sahil Chand), one new design every day, built to spark ideas and fuel creativity.",

  keywords: [
    "Inspira",
    "design inspiration",
    "daily designs",
    "original artwork",
    "creative ideas",
    "UI inspiration",
    "graphic design",
    "Reginald Sahil Chand",
  ],

  authors: [
    {
      name: "Reginald Sahil Chand",
      url: "https://www.github.com/reginaldchand02",
    },
  ],

  creator: "Reginald Sahil Chand",

  openGraph: {
    title: "Inspira - Daily Original Design Inspiration",
    description:
      "A daily drop of original design inspiration, crafted by Reginald Sahil Chand. One new design every day, built to spark ideas and fuel creativity.",

    url: "https://inspira-design.vercel.app/",
    siteName: "Inspira",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Inspira - Daily Original Design Inspiration",
    description:
      "A daily drop of original design inspiration, crafted by Reginald Sahil Chand. One new design every day, built to spark ideas and fuel creativity.",
  },

  applicationName: "Inspira",
  category: "Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextTopLoader
            color="var(--inspira-design-primary)"
            showSpinner={false}
          />
          <HeaderPrimary />
          {children}
          <Toaster />
          <FooterPrimary />
        </ThemeProvider>
      </body>
    </html>
  );
}
