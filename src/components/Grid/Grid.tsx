"use client";

import Link from "next/link";

import {
  Image as ImageIcon,
  Video,
  Wand2,
  ActivitySquare,
  DraftingCompass,
  MicVocal,
  PersonStanding,
  BrainCircuit,
} from "lucide-react";
import { GridItemCard, GridItem } from "./GridItems";

const items: GridItem[] = [
  {
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    href: "/image",
    icon: ImageIcon,
    iconBg: "from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700",
    newBadge: true,
  },
  {
    title: "Video",
    description: "Generate videos with Hailuo, Pika, Runway, Luma, and more.",
    href: "/video",
    icon: Video,
    iconBg:
      "from-amber-300 to-orange-400 dark:from-amber-600 dark:to-orange-600",
  },
  {
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    href: "/realtime",
    icon: ActivitySquare,
    iconBg: "from-sky-300 to-blue-500 dark:from-sky-600 dark:to-blue-600",
  },
  {
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K.",
    href: "/enhancer",
    icon: Wand2,
    iconBg: "from-zinc-800 to-zinc-700 dark:from-zinc-700 dark:to-zinc-600",
    newBadge: true,
  },
  {
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    href: "/edit",
    icon: DraftingCompass,
    iconBg:
      "from-purple-400 to-fuchsia-500 dark:from-purple-600 dark:to-fuchsia-600",
    newBadge: true,
  },
  {
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    href: "/lipsync",
    icon: MicVocal,
    iconBg:
      "from-emerald-300 to-green-500 dark:from-emerald-600 dark:to-green-600",
    newBadge: true,
  },
  {
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    href: "/motion",
    icon: PersonStanding,
    iconBg:
      "from-neutral-900 to-neutral-700 dark:from-neutral-700 dark:to-neutral-600",
    newBadge: true,
  },
  {
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    href: "/train",
    icon: BrainCircuit,
    iconBg: "from-stone-200 to-stone-300 dark:from-stone-700 dark:to-stone-600",
  },
];

export default function GenerateSection() {
  return (
    <section className="mx-18 mt-0 outline outline-1 outline-lime-300">
      {/* Header row */}
      <div className=" flex items-center justify-between">
        <h2 className="text-lg font-semibold">Generate</h2>
        <Link
          href="/show-all"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Show all
        </Link>
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 gap-x-5  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((it) => (
          <GridItemCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}
