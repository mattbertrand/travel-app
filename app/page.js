"use client";

import { useChat } from "@ai-sdk/react";

export default function Home() {
  const{
    input, 
    messages,
    handleInputChange, 
    handleSubmit,
    isLoading
  } = useChat(
    { api: "/api/chat" }
  );
  
  return (
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
        {messages.map((m) => (
          <div key={m.id} className={`w-full p-4 my-2 rounded ${m.role === "user" ? "bg-blue-100 text-right" : "bg-gray-200 text-left"}`}>
            {m.content}
          </div>
        ))}

        {isLoading && <div>Loading...</div>}
        
        <form onSubmit={handleSubmit}>
            <input
              value={input}
              placeholder="What to do where"
              onChange={handleInputChange}
              disabled={isLoading}
              className="w-full border border-gray-300 rounded px-4 py-2"
            ></input>
            <button type="submit" disabled={isLoading} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
              Send
            </button>
          </form>
      </main>
  );
}
