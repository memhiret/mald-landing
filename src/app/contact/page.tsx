"use client";

import ContactForm from "@/components/ContactForm";
import { Toaster } from "sonner";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-base leading-relaxed px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          Contact Us
        </h1>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Have a question or want to collaborate? Fill out the form below and
          we’ll get back to you soon.
        </p>

        <ContactForm />
      </div>
      <Toaster position="top-center" richColors />
    </div>
  );
}
