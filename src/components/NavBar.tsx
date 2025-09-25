"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  ImageIcon,
  Video,
  Wand2,
  PenTool,
  DraftingCompass,
  Folder,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Item = {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const items: Item[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/image", label: "Image", icon: ImageIcon },
  { href: "/video", label: "Video", icon: Video },
  { href: "/enhancer", label: "Enhancer", icon: Wand2 },
  { href: "/draw", label: "Realtime", icon: PenTool },
  { href: "/edit", label: "Edit", icon: DraftingCompass },
  { href: "/assets", label: "Assets", icon: Folder },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={80}>
      <nav
        className={cn(
          // pill container
          "inline-flex items-center gap-4 rounded-[18px] bg-muted p-2 shadow-inner",
          // make it scrollable on small screens
          "max-w-full overflow-x-auto sm:overflow-visible",
          // hide scrollbars visually
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        )}
        aria-label="Primary"
      >
        {items.map((it, idx) => {
          const Icon = it.icon;
          const isActive = pathname === it.href;
          const isHome = idx === 0;

          return (
            <Tooltip key={it.href}>
              <TooltipTrigger asChild>
                <Link
                  href={it.href}
                  className={cn(
                    "relative h-10 w-10 shrink-0 rounded-lg",
                    "flex items-center justify-center transition-colors",
                    !isActive && "hover:bg-accent/60",
                    isActive &&
                      (isHome
                        ? "bg-white text-black ring-1 ring-black/5 shadow"
                        : "bg-neutral-800 text-white"),
                    !isActive && "text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8} className="hidden sm:block">
                {it.label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
    </TooltipProvider>
  );
}
