"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../NavBar";
import { Bell, ChevronDown, Headset, Images, LogOut, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import KreaLogo from "../KreaLogo";

export default function Header() {
  return (
    <header className="sticky top-0 z-40  w-full ">
      <div className="mx-auto flex h-16  items-center  justify-between gap-3 px-3 sm:px-6">
        {/* Left: brand + account switcher (truncate on small) */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <KreaLogo className="w-8 h-8 text-black dark:text-white" />

          {/* Account switcher (text hidden on xs) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 px-2 sm:px-3">
                <Avatar className="mr-2 h-8 w-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User avatar"
                  />
                  <AvatarFallback>BA</AvatarFallback>
                </Avatar>
                <span className="hidden max-w-[160px] truncate text-sm sm:inline">
                  benevolentnimblebat
                </span>
                <ChevronDown className="ml-1 hidden h-4 w-4 sm:inline" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Center: navbar (hidden on < md, shown on md+) */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Condensed “Gallery” / “Support” on md+ */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" className="h-9">
              <Link href="" className="flex items-center gap-1">
                <Images className="h-4 w-4" />
                Gallery
              </Link>
            </Button>
            <Button variant="outline" className="h-9">
              <Link href="" className="flex items-center gap-1">
                <Headset className="h-4 w-4" />
                Support
              </Link>
            </Button>
          </div>

          {/* Always-visible quick actions */}
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-full"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
          </Button>

          <ModeToggle />

          {/* Profile menu (compact icon) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full"
                aria-label="Open profile menu"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User avatar"
                  />
                  <AvatarFallback>KI</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={6} align="end" className="w-48">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/billing">Billing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/team">Team</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/subscription">Subscription</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu (shows Navbar + links) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="ml-1 h-9 w-9 md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Image
                    src="/krealogo.png"
                    alt="Krea Logo"
                    width={72}
                    height={28}
                    className="h-auto w-[72px]"
                  />
                  <span className="text-sm text-muted-foreground">Menu</span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                {/* Primary nav in drawer */}
                <Navbar />

                {/* Secondary links */}
                <div className="grid gap-2">
                  <Button variant="outline" className="justify-start">
                    <Images className="mr-2 h-4 w-4" /> Gallery
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Headset className="mr-2 h-4 w-4" /> Support
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
