"use client";

import { useState, useTransition } from 'react';
import { Bot, Sparkles } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { handleGenerateFaq } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";
import type { GenerateFaqOutput } from '@/ai/flows/generate-faq';

export function FaqSection() {
  const [isPending, startTransition] = useTransition();
  const [faqData, setFaqData] = useState<GenerateFaqOutput | null>(null);
  const { toast } = useToast();

  const onGenerateClick = () => {
    startTransition(async () => {
      const result = await handleGenerateFaq();
      if ('error' in result) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
        setFaqData(null);
      } else {
        setFaqData(result);
      }
    });
  };

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground">
            Have questions? We have answers. Can't find what you're looking for? Generate a new set with our AI.
          </p>
          <Button onClick={onGenerateClick} disabled={isPending} className="mt-6">
            {isPending ? (
              <>
                <Bot className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Ask our AI
              </>
            )}
          </Button>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {isPending && (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border rounded-md p-4">
                  <Skeleton className="h-6 w-3/4" />
                </div>
              ))}
            </div>
          )}

          {faqData && faqData.faqs.length > 0 && (
            <Accordion type="single" collapsible className="w-full">
              {faqData.faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}

          {!isPending && !faqData && (
             <div className="text-center text-muted-foreground border-2 border-dashed rounded-lg p-12">
                <p>Click the button above to generate FAQs using our AI.</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
}
