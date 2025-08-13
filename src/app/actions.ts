"use server";

import { generateFaq } from "@/ai/flows/generate-faq";

export async function handleGenerateFaq() {
    try {
        const result = await generateFaq({ topic: "proxy services and bypass exploits" });
        return result;
    } catch (e: any) {
        console.error(e);
        return { error: e.message || "An unknown error occurred." };
    }
}
