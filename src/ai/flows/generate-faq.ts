// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview FAQ generation flow for proxy services and bypass exploits.
 *
 * - generateFaq - A function that generates FAQs.
 * - GenerateFaqInput - The input type for the generateFaq function.
 * - GenerateFaqOutput - The return type for the generateFaq function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFaqInputSchema = z.object({
  topic: z
    .string()
    .default('proxy services and bypass exploits')
    .describe('The topic for which FAQs should be generated.'),
});
export type GenerateFaqInput = z.infer<typeof GenerateFaqInputSchema>;

const GenerateFaqOutputSchema = z.object({
  faqs: z.array(
    z.object({
      question: z.string().describe('The FAQ question.'),
      answer: z.string().describe('The answer to the FAQ question.'),
    })
  ).describe('A list of frequently asked questions and their answers.'),
});
export type GenerateFaqOutput = z.infer<typeof GenerateFaqOutputSchema>;

export async function generateFaq(input: GenerateFaqInput): Promise<GenerateFaqOutput> {
  return generateFaqFlow(input);
}

const generateFaqPrompt = ai.definePrompt({
  name: 'generateFaqPrompt',
  input: {schema: GenerateFaqInputSchema},
  output: {schema: GenerateFaqOutputSchema},
  prompt: `You are an expert in creating FAQs for technical topics. Generate a list of frequently asked questions and their answers for the following topic: {{{topic}}}. Return the result in JSON format.`,
});

const generateFaqFlow = ai.defineFlow(
  {
    name: 'generateFaqFlow',
    inputSchema: GenerateFaqInputSchema,
    outputSchema: GenerateFaqOutputSchema,
  },
  async input => {
    const {output} = await generateFaqPrompt(input);
    return output!;
  }
);
