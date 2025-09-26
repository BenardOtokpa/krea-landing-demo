"use client";

import KreaLogo from "../KreaLogo"; // your Krea AI logo SVG
import MobbinLogo from "../MobbinLogo";

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="mx-10 flex items-center justify-between px-6 py-3">
        {/* Left side: Krea AI */}
        <div className="flex items-center text-lg gap-2">
          <KreaLogo className="w-8 h-8  text-white dark:text-black" />
          <span className="text-lg font-medium">Krea AI</span>
        </div>

        {/* Right side: Mobbin */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-background">
            curated by
          </span>
          <MobbinLogo className="w-8 h-8 text-white dark:text-black" />
          <span className="text-lg font-bold">Mobbin</span>
        </div>
      </div>
    </footer>
  );
}
