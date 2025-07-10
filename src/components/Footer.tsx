"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Smartphone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const navItems = ["About", "What We Do", "Contact"];

export default function Footer() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  const handleComingSoonClick = () => {
    alert("Coming soon!");
  };

  const year = new Date().getFullYear();

  return (
    <motion.footer
      {...sectionAnimation}
      className="border-t border-gray-200 bg-gray-50 py-16 px-4"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          {/* Logo & desc */}
          <div>
            <Image
              src="/mald-logo.png"
              alt="MALD logo"
              width={48}
              height={48}
              className="mb-4"
            />
            <p className="mb-4 text-gray-700">
              The complete learning community where every child’s uniqueness is
              celebrated.
            </p>
            {/* Social icons removed for now */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-1 text-gray-700 transition-all hover:text-brand"
                  >
                    <span className="peer underline-offset-4 hover:underline">
                      {item}
                    </span>
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all peer-hover:translate-x-0 peer-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Contact Info</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-brand" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone size={18} className="mt-1 flex-shrink-0 text-brand" />
                <span>Telephone: +251 11 833 7319</span>
              </div>
              <div className="flex items-start space-x-2">
                <Smartphone
                  size={18}
                  className="mt-1 flex-shrink-0 text-brand"
                />
                <span>Mobile: +251 91 163 3295 (Genet)</span>
              </div>
              <div className="flex items-start space-x-2">
                <Smartphone
                  size={18}
                  className="mt-1 flex-shrink-0 text-brand"
                />
                <span>Mobile: +251 91 113 0184 (Konjit)</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail size={18} className="mt-1 flex-shrink-0 text-brand" />
                <span>Email: info@maldeducation.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col items-center justify-between gap-4 text-center text-gray-700 md:flex-row">
          <p>© {year} MALD Educational Support PLC. All rights reserved.</p>
          <p>
            Built by{" "}
            <Link
              href="https://memhiret.com"
              className="text-brand transition-all duration-200 hover:underline hover:scale-105 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              MemhirET
            </Link>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
