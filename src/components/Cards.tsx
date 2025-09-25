// components/Cards.tsx
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type Slide = {
  title: string;
  body: string;
  descHead: string;
  descText: string;
  action: string;
  media: string;
  href?: string;
};

export default function SlideCard({ slide, heightClass = "h-[28rem] sm:h-[32rem] lg:h-[36rem] xl:h-[38rem]" }: { slide: Slide, heightClass?: string; }) {
  const isVideo = (slide.media ?? "").toLowerCase().endsWith(".mp4");

  return (
    <Card  className={cn(
        "relative w-full overflow-hidden rounded-3xl border-0 shadow-sm",
        heightClass
      )}>
      {isVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={slide.media}
          playsInline
          autoPlay
          muted
          loop
        />
      ) : (
        <img
          src={slide.media}
          alt={slide.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/10" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-3xl" />

      <CardHeader className=" relative z-10 p-5 sm:p-6 md:p-8">
        <CardTitle className="text-[11px] font-medium uppercase tracking-wider text-white/80">
          {slide.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 p-5 sm:p-6 md:p-8">
        <div className="pointer-events-none absolute inset-x-4 top-44 -translate-y-1/2 text-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold tracking-tight text-white drop-shadow-md">
            {slide.body}
          </h1>
        </div>
      </CardContent>

      <CardFooter>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6 md:p-8">
          <div className="max-w-[520px]">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              {slide.descHead}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              {slide.descText}
            </p>
          </div>
          <Link href={slide.href ?? "#"} className="shrink-0">
            <Button
              size="lg"
              className="rounded-full bg-white text-black hover:bg-white/90"
            >
              {slide.action}
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
