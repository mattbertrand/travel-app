"use client";

import { useCompletion } from "@ai-sdk/react";

export default function Home() {
  const{
    completion, 
    input, 
    handleInputChange, 
    handleSubmit
  } = useCompletion();
  return (
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
        <form onSubmit={handleSubmit}>
            <input
              value={input}
              placeholder="What to do where"
              onChange={handleInputChange}
            ></input>
          </form>
          {completion ? (
            <div>{completion}</div>
          ) : (
            <div>Recommend places to visit...</div>
          )}
      </main>
  );
}
