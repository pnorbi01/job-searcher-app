import Providers from "@/app/providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-main",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Job Searcher App — Discover Remote Jobs Worldwide",
  description:
    "Browse thousands of curated remote job opportunities from top companies. Filter by location and industry to find your perfect remote career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
