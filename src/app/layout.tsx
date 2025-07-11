"use client";

import "./globals.css";
import { Inter, Funnel_Display, Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import MobileSheet from "@/components/MobileSheet";
import Footer from "@/components/Footer";
import ScrollButtons from "@/components/ScrollButtons";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const funnel = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300","400","500","600","700","800"],
});

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable, funnel.variable, manrope.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B6B54" />
      </head>
      <body className="flex min-h-screen flex-col bg-background font-sans antialiased">
        <ErrorBoundary>
          <Navbar />
          <MobileSheet />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollButtons />
        </ErrorBoundary>
      </body>
    </html>
  );
}
