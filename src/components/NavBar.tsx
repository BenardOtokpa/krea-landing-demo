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
      <div
        className={cn(
          "inline-flex items-center gap-4 rounded-[18px]",
          "bg-muted p-2 shadow-inner"
        )}
      >
        {items.map((it, idx) => {
          const Icon = it.icon;
          const isActive = pathname === it.href;

          // Special active style for the first (“Home”) tab = white pill with soft ring.
          const isHome = idx === 0;

          return (
            <Tooltip key={it.href}>
              <TooltipTrigger asChild>
                <Link
                  href={it.href}
                  className={cn(
                    "relative h-10 w-10 rounded-lg",
                    "flex items-center justify-center",
                    "transition-colors",
                    !isActive && "hover:bg-accent/60",
                    isActive &&
                      (isHome
                        ? // white active pill (Home)
                          "bg-white text-black ring-1 ring-black/5 shadow"
                        : // dark gray active pill (others)
                          "bg-neutral-800 text-white"),
                    // icon color when not active
                    !isActive && "text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="h-5 w-5 " />
                  
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8}>
                {it.label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
