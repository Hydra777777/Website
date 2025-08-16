"use client";

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Globe, Link2, CircleHelp, Github } from 'lucide-react';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimatedSection } from './animated-section';

export const products = [
  {
    icon: <Link2 className="h-8 w-8 text-primary" />,
    title: 'Linewize Link Checker',
    slug: 'linewize-link-checker',
    description: 'A tool to instantly check if a URL is blocked by Linewize filters.',
    status: 'Finished',
    variant: 'default',
    link: 'https://github.com/Lonely-Corporation/Is-the-Proxy-Blocked',
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: 'Proxy',
    slug: 'proxy',
    description: 'A fast and reliable proxy service powered by Ultraviolet, under active development.',
    status: 'In Development',
    variant: 'secondary',
    link: 'https://github.com/Lonely-Corporation/The-Lonely-Proxy',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Proxy Integrated Browser',
    slug: 'proxy-integrated-browser',
    description: 'A custom browser with integrated proxy features for seamless access.',
    status: 'Not Started',
    variant: 'outline',
    link: null,
  },
  {
    icon: <CircleHelp className="h-8 w-8 text-primary" />,
    title: 'Placeholder',
    slug: 'placeholder-1',
    description: 'Your next great idea could be here. Stay tuned for future developments.',
    status: 'Planned',
    variant: 'outline',
    link: null,
  },
  {
    icon: <CircleHelp className="h-8 w-8 text-primary" />,
    title: 'Placeholder',
    slug: 'placeholder-2',
    description: 'Your next great idea could be here. Stay tuned for future developments.',
    status: 'Planned',
    variant: 'outline',
    link: null,
  },
];

export function Products() {
  return (
    <section id="products" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Core Services</h2>
            <p className="mt-4 text-muted-foreground">
              We provide robust solutions for navigating the digital landscape securely and efficiently.
            </p>
          </div>
        </AnimatedSection>
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="px-10 md:px-2 basis-full md:basis-1/2 lg:basis-1/3 py-4">
                  <div className="h-full">
                      <Card
                        className="flex flex-col transition-shadow duration-300 ease-in-out shadow-md hover:shadow-primary/20 h-full"
                      >
                        <CardHeader className="flex flex-row items-start gap-4 pb-4">
                          {product.icon}
                          <div className="flex-1">
                            <CardTitle>{product.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <CardDescription>{product.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                          <Badge variant={product.variant as any}>{product.status}</Badge>
                          <div className="flex items-center gap-2">
                             <Link href={`/products/${product.slug}`} className="text-sm font-medium text-primary/80 hover:text-primary hover:drop-shadow-[0_0_5px_hsl(var(--primary))] transition-all duration-300">
                              Learn More
                            </Link>
                            {product.link && (
                              <Button variant="outline" size="icon" asChild>
                                <Link href={product.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                  <Github className="h-5 w-5" />
                                </Link>
                              </Button>
                            )}
                          </div>
                        </CardFooter>
                      </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 md:left-[-2rem] lg:left-[-3rem] top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 md:right-[-2rem] lg:right-[-3rem] top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
