"use server";

import { streamUI } from "@ai-sdk/rsc";
import { openai } from "@ai-sdk/openai";

export async function streamComponent() {
    const result = await streamUI({
        model: openai("gpt-5.1"),
        prompt: "What is the deepest lake in the US?",
        text: () => "The deepest lake in the US is Crater Lake in Oregon, with a depth of 1,949 feet (594 meters)."
        // text: ({content}) => <div>{content}</div>
    });
    return result.value;
}