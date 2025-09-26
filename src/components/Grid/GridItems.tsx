"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { ComponentType } from "react";

export type GridItem = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  iconBg?: string; // e.g. "from-sky-400 to-blue-500"
  newBadge?: boolean; // shows the blue "New" badge
};

export function GridItemCard({
  title,
  description,
  href,
  icon: Icon,
  iconBg = "from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700",
  newBadge = false,
}: GridItem) {
  return (
    <Card className="overflow-hidden border-none shadow-none">
  <CardContent className="flex items-center justify-between p-4 sm:p-5">
        {/* Left: icon + text */}
        <div className="flex min-w-0 items-start  gap-3">
          <div
            className={`grid h-16 w-20 place-items-center rounded-xl bg-gradient-to-br text-foreground shadow-sm ${iconBg}`}
            style={{
              backgroundImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
            }}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-[15px] font-semibold leading-none">
                {title}
              </h3>
              {newBadge && (
                <span className="rounded-full bg-blue-500 px-2 py-0.5 text-[10px] font-semibold text-white dark:text-blue-400">
                  New
                </span>
              )}
            </div>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        {/* Right: CTA */}
        <Link href={href} className="shrink-0">
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full px-4 text-[13px] shadow-sm"
          >
            Open
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
