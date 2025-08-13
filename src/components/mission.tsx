import { Target } from "lucide-react";

export function Mission() {
  return (
    <section id="mission" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Mission</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Empowering Digital Freedom
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
              At Lonely Corporation, we are dedicated to developing pioneering technology that grants users unrestricted and secure access to the digital world. We believe in an open internet and build the tools to make it a reality. Especially at school.
            </p>
          </div>
           <div className="flex justify-center">
            <Target className="h-48 w-48 text-accent opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
