"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 hidden w-full backdrop-blur transition-shadow md:block",
        scrolled ? "bg-white/70 shadow-lg" : "bg-white/50"
      )}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/mald-logo.png"
            alt="MALD logo"
            width={40}
            height={40}
            className="h-16 w-16 object-contain"
          />
          <span className="font-display text-2xl font-semibold text-brand">MALD School</span>
        </Link>

        {/* Links */}
        <NavigationMenu aria-label="Primary" className="hidden lg:flex">
          <NavigationMenuList className="space-x-16">
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex items-center gap-1 text-base font-medium text-gray-700 transition-all hover:text-brand focus:outline-none">
                    <span className="peer underline-offset-4 hover:underline">{link.label}</span>
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all peer-hover:translate-x-0 peer-hover:opacity-100" />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA */}
        <Button
          asChild
          size="sm"
          variant="brand"
          className="hidden lg:inline-flex"
        >
          <Link href="/contact">Apply Now</Link>
        </Button>
      </div>
    </header>
  );
} 