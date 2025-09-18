import Image from "next/image";
import Navbar from "../NavBar";
import { Bell, ChevronDown, Headset, Images, LogOut } from "lucide-react";
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
    <header className="flex items-center justify-between  ">
      <div className="flex items-center justify-between gap-4 text-muted-foreground">
        <Image
          src="/krealogo.png"
          alt="Krea Logo"
          width={80}
          height={30}
          priority
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" aria-label="Open account menu">
              <Avatar className="h-8 w-8 ml-2">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="User avatar"
                />
                <AvatarFallback>BA</AvatarFallback>
              </Avatar>
              Benevoiletnimbalbat <ChevronDown />{" "}
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
      <Navbar />
      <div className=" flex items-center justify-between gap-2 px-9">
        <Button variant="outline" aria-label="Open account menu">
          <Link href="" className=" flex items-center gap-1">
            <Images />
            Gallery
          </Link>
        </Button>
        <Button variant="outline" aria-label="Open account menu">
          <Link href="" className=" flex items-center gap-1 ">
            <Headset /> Support
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
              className="h-5 w-5 rounded-full "
              aria-label="Open account menu"
            >
              <Avatar className="h-9 w-9 ml-2">
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
              {" "}
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
