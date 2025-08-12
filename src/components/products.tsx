import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Server, ShieldCheck, Zap } from "lucide-react";

const products = [
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "High-Speed Proxies",
    description: "Access a global network of resilient and fast proxy servers, ensuring your anonymity and connection stability.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Advanced Bypass Exploits",
    description: "Navigate complex web security with our sophisticated exploits, designed to overcome modern detection systems.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Performance Tooling",
    description: "Optimize your operations with our suite of tools built for speed, efficiency, and seamless integration.",
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
            <Card key={product.title} className="flex flex-col transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-primary/20">
              <CardHeader className="flex flex-row items-center gap-4">
                {product.icon}
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
