"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center flex-1">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/logo.png" alt="Lonely Corporation Logo" width={24} height={24} className="rounded-md" />
            <span className="hidden font-bold sm:inline-block">Lonely Corporation</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm flex-1 justify-center">
          <Link
            href="#products"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Products
          </Link>
          <Link
            href="#mission"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Mission
          </Link>
          <Link
            href="#community"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Community
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="w-full flex-1 md:w-auto md:flex-none">
             <form className="w-full max-w-sm">
                <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search..."
                    className="pl-9"
                    aria-label="Search site"
                />
                </div>
            </form>
          </div>
           <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-6 pt-6">
                  <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Image src="/logo.png" alt="Lonely Corporation Logo" width={24} height={24} className="rounded-md" />
                    <span className="font-bold">Lonely Corporation</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                     <Link href="#products" className="text-lg font-medium">Products</Link>
                     <Link href="#mission" className="text-lg font-medium">Mission</Link>
                     <Link href="#community" className="text-lg font-medium">Community</Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
