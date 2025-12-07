"use client";

import { useState } from "react";
import { getData } from "./actions";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState("");

  return (
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
        <button onClick={async () => {
          const { people } =  await getData("Generate a list of 5 famous travelers including their name, what they are known for, address, and age.");
          setGeneration(JSON.stringify(people, null, 2));
        }}
        >View People!</button>
        <pre className="mt-8 whitespace-pre-wrap">{generation}</pre>
      </main>
  );
}
