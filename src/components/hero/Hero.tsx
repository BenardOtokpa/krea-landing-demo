import React from "react";
import EmblaCarousel from "../carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
export default function Hero() {
  return (
    <div className="w-full h-[600px] py-10  ">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
