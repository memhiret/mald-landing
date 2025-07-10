"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1530373239218-38164fead0c2?auto=format&fit=crop&w=1920&q=80",
    alt: "Teacher guiding students – classroom – engagement",
  },
  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1920&q=80",
    alt: "Happy children – library – learning together",
  },
  {
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1920&q=80",
    alt: "Students collaborating – science lab – curiosity",
  },
];

export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative" aria-label="Image carousel">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((img) => (
            <div key={img.src} className="min-w-full">
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover md:h-96"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
} 