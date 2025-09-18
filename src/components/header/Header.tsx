import Image from "next/image";
import Navbar from "../NavBar";
import { Bell, Headset, Images } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between ">
      <div>
        <Image
          src="/krealogo.png"
          alt="Krea Logo"
          width={80}
          height={30}
          priority
        />
      </div>
      <Navbar />
      <div className=" flex items-center justify-between gap-4">
        <Button
          variant="outline"
          
          aria-label="Open account menu"
        >
          <Link href=""  className=" flex items-center gap-1">
            <Images />
            Gallery
          </Link>
        </Button>
        <Button
          variant="outline"
          
          aria-label="Open account menu"
        >
          <Link href=""  className=" flex items-center gap-1 ">
            <Headset /> <span>Support</span>
          </Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 rounded-full p-0"
          aria-label="Open account menu"
        >
          <Bell />
        </Button>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full p-0"
              aria-label="Open account menu"
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
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
