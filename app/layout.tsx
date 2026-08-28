import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.superenggindia.com"),
  title: { default: "SEI | Supertech Engineering (India)", template: "%s | SEI" },
  description: "Cleanroom equipment, conveyor systems and custom stainless-steel fabrication engineered by Supertech Engineering (India).",
  openGraph: {
    type: "website",
    title: "SEI | Supertech Engineering (India)",
    description: "Precision engineering. Built to perform. Cleanroom equipment, conveyor systems and custom stainless-steel fabrication.",
    images: [{ url: "/og.png", width: 1536, height: 864, alt: "SEI — Precision engineering. Built to perform." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEI | Supertech Engineering (India)",
    description: "Precision engineering. Built to perform.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
