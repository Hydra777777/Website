import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GitBranch, ChevronsDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-background">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
            From Lonely Corporation
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            ProxyPilot
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Unleash the power of the web with our cutting-edge proxies and bypass exploits.
            Engineered for performance, privacy, and power.
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="https://github.com/Lonely-Corporation" target="_blank" rel="noopener noreferrer">
              <GitBranch className="mr-2 h-5 w-5" />
              Explore on GitHub
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#products">
              View Products
              <ChevronsDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
