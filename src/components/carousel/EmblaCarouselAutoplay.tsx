"use client";
import { useCallback } from "react";
import type { EmblaCarouselType } from "embla-carousel";

export const useAutoplay = (emblaApi?: EmblaCarouselType) => {
  const onAutoplayInteraction = useCallback(
    (action: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay as
        | { reset?: () => void }
        | undefined;

      autoplay?.reset?.(); // keep autoplay running by resetting the timer
      action();
    },
    [emblaApi]
  );

  return { onAutoplayInteraction };
};
