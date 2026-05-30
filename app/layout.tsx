import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

// Serif touch "respiro umano" — solo hook / titolo manifesto / citazioni (vedi DESIGN.md).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus — Studio web design AI-driven",
  description:
    "Studio web design AI-driven con metodo, non AI-slop. Siti su misura per PMI italiane: brief, design, build, review. L'umano dirige, l'AI esegue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/*
          Clash Display (titoli) + Satoshi (body) via Fontshare CDN.
          TODO pre-go-live: self-host i woff2 (vedi "Note per la build" in DESIGN.md).
          React 19 monta questi <link> nello <head>.
        */}
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,700&display=swap"
        />
        {children}
      </body>
    </html>
  );
}
