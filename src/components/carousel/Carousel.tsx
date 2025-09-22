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
import Cards from "../Cards";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
    Autoplay({
      delay: 3500,
      playOnInit: true,
      stopOnInteraction: false, // keep autoplay after interactions
      stopOnMouseEnter: true, // pause on hover (optional)
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

  // Small helper: keep autoplay alive by resetting its timer on any interaction
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
    <section className="embla bg-cyan-100 ">
      <div className="embla__viewport overflow-hidden  bg-emerald-500" ref={emblaRef}>
        <div className="embla__container flex ">
         <Cards />
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => withAutoplay(() => onDotButtonClick(index))}
              className={
                "embla__dot" +
                (index === selectedIndex ? " embla__dot--selected" : "")
              }
            />
          ))}
        </div>

        <div className="embla__buttons">
          <PrevButton
            onClick={() => withAutoplay(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => withAutoplay(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
