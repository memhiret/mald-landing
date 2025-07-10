"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: 340, label: "Successful Trainings" },
  { value: 54, label: "Awards Received", suffix: "+" },
  { value: 1380, label: "Satisfied Parents", suffix: "+" },
  { value: 1000, label: "Outstanding Students", suffix: "+" },
];

function Counter({ end, suffix }: { end: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 1200;
          const frames = Math.round(duration / 16);
          const increment = end / frames;
          let current = 0;
          const id = setInterval(() => {
            current += increment;
            if (current >= end) {
              current = end;
              clearInterval(id);
            }
            setCount(Math.floor(current));
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [end]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBand({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "bg-primary text-primary-foreground py-12 md:py-20",
        className
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2">
            <p className="text-4xl font-bold md:text-5xl lg:text-6xl">
              <Counter end={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm font-medium uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
