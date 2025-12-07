"use client";

import { useState } from "react";
import { generate } from "./actions";
import { readStreamableValue } from "@ai-sdk/rsc";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState("");

  return (
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
        <button onClick={async () => {
          const {output} = await generate(
            "What is the deepest lake in the US?"
          );
          for await (const delta of readStreamableValue(output)) {
            setGeneration(currentGeneration => `${currentGeneration}${delta}` );
          }
        }}
        >Ask Me Anything</button>
        <div className="mt-8 whitespace-pre-wrap">{generation}</div>
      </main>
  );
}
