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
import { Server, Shield, Link2, Github, Package } from 'lucide-react';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: 'Placeholder Product',
    description: 'This is a placeholder for a future product. Details to come.',
    status: 'Coming Soon',
    variant: 'outline',
  },
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: 'Placeholder Product',
    description: 'This is a placeholder for a future product. Details to come.',
    status: 'Coming Soon',
    variant: 'outline',
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: 'Proxy',
    description: 'A fast and reliable proxy service powered by Ultraviolet, currently under active development.',
    status: 'In Development',
    variant: 'secondary',
    link: 'https://github.com/Lonely-Corporation/The-Lonely-Proxy',
  },
    {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: 'Placeholder Product',
    description: 'This is a placeholder for a future product. Details to come.',
    status: 'Coming Soon',
    variant: 'outline',
  },
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: 'Placeholder Product',
    description: 'This is a placeholder for a future product. Details to come.',
    status: 'Coming Soon',
    variant: 'outline',
  },
];

export function Products() {
  return (
    <section id="products" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Core Services</h2>
          <p className="mt-4 text-muted-foreground">
            We provide robust solutions for navigating the digital landscape securely and efficiently.
          </p>
        </div>
        <div className="relative">
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card
                      className="flex flex-col transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20 h-full"
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
                        {product.link && (
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={product.link} target="_blank" rel="noopener noreferrer">
                              <Github className="h-5 w-5" />
                            </Link>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 transform -translate-x-8 hidden sm:flex" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 transform translate-x-8 hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
