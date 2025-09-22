// components/carousel/EmblaCarousel.tsx
"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import SlideCard from "../Cards";
import type { Slide } from "@/components/Cards";

type EmblaCarouselProps = {
  slides: Slide[]; // <-- typed properly
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
    Autoplay({
      delay: 3500,
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // keep autoplay alive after manual interactions
  const withAutoplay = useCallback(
    (action: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay as
        | { reset?: () => void }
        | undefined;
      autoplay?.reset?.();
      action();
    },
    [emblaApi]
  );

  return (
    <section className="max-w-full mx-auto pr-12 pl-4  h-[600px] [--slide-height:30rem] [--slide-spacing:1rem] [--slide-size:80%]">
      <div className="overflow-hidden  h-full" ref={emblaRef}>
        <div className="flex touch-pan-y bg-lime-100 h-full  not-even:touch-pinch-zoom [margin-left:calc(var(--slide-spacing)*-1)]">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="translate-z-0 flex-[0_0_var(--slide-size)] h-full min-w-0 pl-[var(--slide-spacing)]"
            >
              <SlideCard slide={slide} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls: align to the right like the screenshot */}
      <div className="ml-auto flex items-center justify-between gap-6 w-1/2">
        {/* Dots (left side) */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => withAutoplay(() => onDotButtonClick(index))}
              className={[
                // Base dot
                "h-2.5 w-2.5 rounded-full transition-colors",
                // Inactive (light gray) vs active (black)
                index === selectedIndex ? "bg-black" : "bg-neutral-300",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Arrows (right side*/}
        <div className="flex items-center px-10">
          <PrevButton
            onClick={() => withAutoplay(onPrevButtonClick)}
            disabled={prevBtnDisabled}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-700 hover:bg-neutral-200 shadow-sm disabled:opacity-40"
          />
          <NextButton
            onClick={() => withAutoplay(onNextButtonClick)}
            disabled={nextBtnDisabled}
            className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-700 hover:bg-neutral-200 shadow-sm disabled:opacity-40"
          />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
