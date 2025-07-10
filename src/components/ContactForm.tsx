"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { TextareaHTMLAttributes, useRef } from "react";

function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      rows={5}
      {...props}
      className={`flex w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.className ?? ""}`}
    />
  );
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Contact form coming soon!");
    formRef.current?.reset();
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Send us a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Your Name
              </label>
              <Input id="name" name="name" placeholder="John Doe" required disabled />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required disabled />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-700">
              Subject
            </label>
            <Input id="subject" name="subject" placeholder="I’d like to enquire about…" disabled />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <TextArea id="message" name="message" placeholder="Your message" disabled />
          </div>

          <Button type="submit" variant="brand" className="w-full md:w-auto" disabled>
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 