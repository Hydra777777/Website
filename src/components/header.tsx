"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const getLink = (hash: string) => isHomePage ? hash : `/${hash}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 mx-auto">
        {/* Mobile Menu */}
        <div className="flex items-center md:hidden flex-1">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
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
                  <Link href={getLink('#products')} className="text-lg font-medium">Products</Link>
                  <Link href={getLink('#mission')} className="text-lg font-medium">Mission</Link>
                  <Link href={getLink('#community')} className="text-lg font-medium">Community</Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
           <div className="flex-1">
             {/* Mobile search can be re-added if needed */}
          </div>
        </div>
        
        {/* Desktop Header Layout */}
        <div className="hidden md:flex flex-1 items-center justify-between">
          {/* Left: Logo & Navigation */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo.png" alt="Lonely Corporation Logo" width={24} height={24} className="rounded-md" />
                <span className="font-bold">Lonely Corporation</span>
            </Link>
            <nav className="flex gap-6 text-sm">
                <Link
                href={getLink('#products')}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                Products
                </Link>
                <Link
                href={getLink('#mission')}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                Mission
                </Link>
                <Link
                href={getLink('#community')}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                Community
                </Link>
            </nav>
          </div>

          {/* Right: Search Bar */}
          <div className="flex items-center justify-end">
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
        </div>
      </div>
    </header>
  );
}
