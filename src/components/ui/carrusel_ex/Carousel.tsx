import React, { useRef, type JSX } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "src/content/landingContent/confing.ts";

interface CarouselProps {
  items: JSX.Element[];
}

export const Carousel = ({ items }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const offset = (direction === "left" ? -1 : 1) * 400; // Aumento el scroll a 400px
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll scroll-smooth py-10 [scrollbar-width:none]"
        ref={carouselRef}
      >
        <div className={cn("flex gap-6 pl-4 mx-auto max-w-7xl")}>
          {items}
        </div>
      </div>
      {/* Botones de navegación visibles solo en pantallas pequeñas (responsive) */}
      <div className="mr-4 flex justify-end gap-3 sm:flex lg:hidden">
        <button
          className="h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center shadow-md transition-colors"
          onClick={() => scrollBy("left")}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        </button>
        <button
          className="h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center shadow-md transition-colors"
          onClick={() => scrollBy("right")}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export const Card = ({ card }: { card: { src: string; title: string; category: string } }) => (
  <div className="group relative h-80 w-56 md:h-[30rem] md:w-[22rem] rounded-3xl bg-gray-100 dark:bg-neutral-900 overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-2xl hover:brightness-110 cursor-pointer">
    <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-black/50 to-transparent transition-opacity group-hover:from-black/60 group-hover:to-black/10" />
    <div className="relative z-10 p-6">
      <p className="text-sm md:text-base text-white opacity-90">{card.category}</p>
      <p className="mt-2 text-xl md:text-3xl font-semibold text-white">{card.title}</p>
    </div>
    <BlurImage src={card.src} alt={card.title} />
  </div>
);

export const BlurImage = ({ src, alt }: { src: string; alt: string }) => (
  <img
    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    src={src}
    alt={alt}
    loading="lazy"
    decoding="async"
  />
);
