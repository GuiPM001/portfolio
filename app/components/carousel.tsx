"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

type CarouselProps = {
  children: React.ReactNode;
};

export function Carousel({ children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    loop: true,
    align: "start",
  });

  return (
    <div
      className="relative w-full"
      role="region"
      aria-roledescription="carousel"
    >
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">{children}</div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="bg-sky-600/90 flex items-center justify-center h-8 w-8 rounded-full -left-12 top-1/2 static translate-y-0 cursor-pointer hover:bg-sky-500 duration-200"
        >
          <LuArrowLeft size={18} />
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="bg-sky-600/90 flex items-center justify-center h-8 w-8 rounded-full -right-12 top-1/2 static translate-y-0 cursor-pointer hover:bg-sky-500 duration-200"
        >
          <LuArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

export function CarouselItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className} role="group" aria-roledescription="slide">
      {children}
    </div>
  );
}
