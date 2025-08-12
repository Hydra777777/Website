import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Shield, Link2 } from 'lucide-react';

const products = [
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: 'Proxy',
    description: 'A fast and reliable proxy service powered by Ultraviolet, currently under active development.',
    status: 'In Development',
    variant: 'secondary',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Proxy Integrated Custom Browser',
    description: 'A custom browser with our proxy service built-in. Planning stages.',
    status: 'Not Started',
    variant: 'destructive',
  },
  {
    icon: <Link2 className="h-8 w-8 text-primary" />,
    title: 'Linewize Blocked Link Checker',
    description: 'Check if a link is blocked by Linewize school filters. Ready to use.',
    status: 'Finished',
    variant: 'default',
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
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.title}
              className="flex flex-col transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20"
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
              <CardFooter>
                <Badge variant={product.variant as any}>{product.status}</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
