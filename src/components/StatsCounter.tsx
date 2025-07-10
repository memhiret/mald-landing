"use client";

import * as React from "react";

interface Props {
  end: number;
  label: string;
  suffix?: string;
  className?: string;
  numberClassName?: string;
  labelClassName?: string;
}

export function StatsCounter({ end, label, suffix, className, numberClassName = "", labelClassName = "" }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
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
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className={`space-y-2 ${className ?? ""}`}>
      <p
        className={`text-4xl font-bold md:text-5xl lg:text-6xl font-display ${numberClassName}`.trim()}
      >
        {count}
        {suffix}
      </p>
      <p className={`text-sm font-medium uppercase tracking-wide ${labelClassName}`.trim()}>{label}</p>
    </div>
  );
} 