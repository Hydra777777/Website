"use server";

import { generateFaq, type GenerateFaqOutput } from "@/ai/flows/generate-faq";

export async function handleGenerateFaq(): Promise<GenerateFaqOutput | { error: string }> {
  try {
    const result = await generateFaq({ topic: 'proxy services and bypass exploits' });
    return result;
  } catch (e) {
    console.error(e);
    return { error: "Failed to generate FAQ. Please try again later." };
  }
}
