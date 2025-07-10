"use client";

import { ChevronUp, ChevronDown } from "lucide-react";
import * as React from "react";

export default function ScrollButtons() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (top: boolean) => {
    window.scrollTo({ top: top ? 0 : document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 flex flex-col gap-3 transition-opacity ${show ? "opacity-100" : "opacity-0"}`}
    >
      <button
        aria-label="Scroll to top"
        onClick={() => scrollTo(true)}
        className="rounded-full bg-brand p-3 text-white shadow-lg hover:bg-brand-accent focus:outline-none"
      >
        <ChevronUp className="h-4 w-4" />
      </button>
      <button
        aria-label="Scroll to bottom"
        onClick={() => scrollTo(false)}
        className="rounded-full bg-brand p-3 text-white shadow-lg hover:bg-brand-accent focus:outline-none"
      >
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
} 