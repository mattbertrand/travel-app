"use server";

import { streamObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "@ai-sdk/rsc";
import { z } from "zod";

export async function generate(input) {
    "use server";

    const stream = createStreamableValue();

    (async () => {
        const {partialObjectStream} = await streamObject({
                model: openai("gpt-5.1"),
                system: "You are a helpful assistant that generates lists of famous travelers.",
                prompt: input,
                schema: z.object({
                    people: z.array(
                        z.object({
                            name: z.string().describe("The full name of the traveler"),
                            knownFor: z.string().describe("What the traveler is known for"),
                            address: z.string().describe("The traveler's primary location"),
                            age: z.number().describe("The age of the traveler")
                        })
                    )
                })
            });
            for await (const partialObject of partialObjectStream) {
                stream.update(partialObject);
            }
            stream.done();
        })();
    return {object: stream.value};

}