"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/contact", label: "Contact" },
];

export default function MobileSheet() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Mobile Top Bar - Now Sticky */}
      <div className={cn(
        "sticky top-0 z-40 flex items-center justify-between p-4 backdrop-blur transition-shadow md:hidden",
        scrolled ? "bg-white/70 shadow-lg" : "bg-white/50"
      )}>
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/mald-logo.png" alt="MALD logo" width={32} height={32} />
          <span className="font-display text-lg font-semibold text-brand">MALD</span>
        </Link>
        <SheetTrigger aria-label={open ? "Close menu" : "Open menu"} className="p-2">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </SheetTrigger>
      </div>
      <SheetContent
        side="left"
        className="w-full max-w-xs focus:outline-none flex flex-col h-full"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-8 min-h-full">
          {/* Accessible dialog title */}
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col items-center gap-8">
            <nav className="space-y-6" aria-label="Main navigation">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium text-center hover:text-brand transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Button asChild variant="brand" className="w-40" onClick={() => setOpen(false)}>
              <Link href="/contact">Apply Now</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
} 