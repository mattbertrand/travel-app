"use client";

import { generate } from "./actions";
import { useState } from "react";
import { readStreamableValue } from "@ai-sdk/rsc";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState("");

  return (
    <div>
      <button
        onClick={async () => {
          const {object} = await generate(  
            "Generate a list of famous travelers with their name, what they are known for, address, and age."
          );
          for await (const partialObject of readStreamableValue(object)) {
            if(partialObject) {
              setGeneration(JSON.stringify(partialObject, null, 2));
            }
          }
        }}>View People!</button>
        <pre>{generation}</pre>
    </div>
  );
}
