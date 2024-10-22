// src/app/api/chatbot/route.ts
import { NextRequest, NextResponse } from 'next/server';

const RETRY_LIMIT = 5;
const RETRY_DELAY_MS = 15000; // 15 seconds

async function fetchWithRetry(message: string, apiKey: string, retries = 0): Promise<any> {
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B",
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ inputs: message }),
            }
        );

        const answer = await response.json();

        // Check if the model is still loading and retry if needed
        if (answer.error && answer.error.includes("currently loading") && retries < RETRY_LIMIT) {
            console.log(`Model is loading, retrying in ${RETRY_DELAY_MS / 1000} seconds...`);
            await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
            return fetchWithRetry(message, apiKey, retries + 1);
        }

        return answer;
    } catch (error) {
        console.error("Failed to fetch from chatbot:", error);
        throw error;
    }
}

export async function POST(req: NextRequest) {
    const { message } = await req.json();
    const apiKey = process.env.HUGGING_FACE_API_KEY;

    try {
        const answer = await fetchWithRetry(message, apiKey || "");
        return NextResponse.json({ answer });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to get response from chatbot.' }, { status: 500 });
    }
}
