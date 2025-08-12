"use client";

import Link from "next/link";
import { Search, Bot } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
           <Link href="/" className="mr-6 flex items-center space-x-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">Lonely Corporation</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
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
              href="#faq"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              FAQ
            </Link>
            <Link
              href="#community"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Community
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
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
        </div>
      </div>
    </header>
  );
}
