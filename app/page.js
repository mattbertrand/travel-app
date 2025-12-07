"use client";

import { streamComponent } from "./actions";
import { useState } from "react";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Home() {
  const [component, setComponent] = useState("");

  return (
    <div>
      <h1>AI Streamed Component Example</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setComponent(await streamComponent());
        }}
      >
        <button type="submit">Generate Component</button>
      </form>
      <div style={{ marginTop: "20px" }}>{component}</div>
    </div>
  );
}
