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
              Global-standard Cambridge teaching, caring guidance, and space for
              every learner's unique journey.
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
          <div className="md:col-span-2">
            <h3 className="mb-4 font-semibold">Contact Info</h3>
            <div className="space-y-4 text-gray-700">
              {/* Location */}
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-brand" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              
              {/* Campus Phone Numbers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Abo Campus */}
                <div>
                  <h4 className="font-medium text-brand mb-3 text-sm">Abo Campus</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Smartphone size={16} className="mt-1 flex-shrink-0 text-brand" />
                      <div>
                        <div className="font-medium text-xs text-gray-600">Early Years Division</div>
                        <span className="text-sm">+251 99 363 9903</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Smartphone size={16} className="mt-1 flex-shrink-0 text-brand" />
                      <div>
                        <div className="font-medium text-xs text-gray-600">Primary Division</div>
                        <span className="text-sm">+251 908 174 205</span>
                      </div>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/ZtYLforThjtycjVdA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 bg-brand/10 text-brand rounded-lg hover:bg-brand/20 transition-colors duration-200 text-xs font-medium"
                    >
                      <MapPin size={12} />
                      View Location
                    </a>
                  </div>
                </div>
                
                {/* CMC Campus */}
                <div>
                  <h4 className="font-medium text-brand mb-3 text-sm">CMC Campus</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Smartphone size={16} className="mt-1 flex-shrink-0 text-brand" />
                      <div>
                        <div className="font-medium text-xs text-gray-600">Early Years Division</div>
                        <span className="text-sm">+251 908 174 505</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Smartphone size={16} className="mt-1 flex-shrink-0 text-brand" />
                      <div>
                        <div className="font-medium text-xs text-gray-600">Primary to Lower Secondary</div>
                        <span className="text-sm">+251 968 197 141</span>
                      </div>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/sGEPDZYuK8Xh7KNZ6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 bg-brand/10 text-brand rounded-lg hover:bg-brand/20 transition-colors duration-200 text-xs font-medium"
                    >
                      <MapPin size={12} />
                      View Location
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start space-x-2 pt-2">
                <Mail size={18} className="mt-1 flex-shrink-0 text-brand" />
                <span>Email: info@maldeducationalsupport.com</span>
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
