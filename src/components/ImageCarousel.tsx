"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const images = [
  "/img-01.jpg",
  "/img-02.jpg", 
  "/img-03.jpg",
  "/img-04.jpg",
  "/img-05.jpg",
  "/img-06.jpg",
  "/img-07.jpg",
  "/img-08.jpg",
  "/img-09.jpg",
  "/img-10.jpg",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Calculate how many images to show in grid (2 at a time)
  const imagesPerView = 2;
  const maxIndex = Math.max(0, images.length - imagesPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0; // Reset to beginning
        }
        return prevIndex + 1;
      });
    }, 4000); // Slower auto-scroll for better viewing

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Get current images to display (2 at a time)
  const getCurrentImages = () => {
    const result = [];
    for (let i = 0; i < imagesPerView; i++) {
      const imageIndex = (currentIndex + i) % images.length;
      result.push({
        src: images[imageIndex],
        index: imageIndex
      });
    }
    return result;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
          Life at MALD
        </h3>
        <p className="text-sm text-gray-600">
          Moments of learning, growth, and joy
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <AnimatePresence mode="wait">
            {getCurrentImages().map((image, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={`MALD School moment ${image.index + 1}`}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
                
                {/* Image number overlay */}
                <div className="absolute top-2 right-2 rounded-full bg-black/20 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {image.index + 1}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mb-4">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
            aria-label="Previous images"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          {/* Auto-play Control */}
          <button
            onClick={toggleAutoPlay}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-sm font-medium text-gray-700"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="h-4 w-4" />
                Auto-playing
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                Paused
              </>
            )}
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
            aria-label="Next images"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-brand shadow-lg w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to images ${index * imagesPerView + 1}-${Math.min((index + 1) * imagesPerView, images.length)}`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="mt-3 text-center text-xs text-gray-500">
          Showing {currentIndex * imagesPerView + 1}-{Math.min((currentIndex + 1) * imagesPerView, images.length)} of {images.length} images
        </div>
      </div>
    </div>
  );
} 