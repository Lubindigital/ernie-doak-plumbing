import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Ernie Doak Plumbing Inc | North Shore Oahu | Haleiwa, HI",
  description:
    "Family-owned plumber serving Oahu's North Shore since 1989. New construction, remodels, solar water heaters, gas piping, repiping & more. 5-star rated. Call (808) 638-8620.",
  keywords:
    "plumber North Shore, plumbing Haleiwa, Ernie Doak Plumbing, solar water heater Hawaii, remodel plumbing Oahu",
  openGraph: {
    title: "Ernie Doak Plumbing Inc | North Shore Oahu",
    description:
      "Family-owned plumber serving Oahu's North Shore since 1989. 5-star rated. New construction, remodels, and more. Call (808) 638-8620.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
