import React from "react";
import { useDemoContext } from "./DemoContext";

export default function Home() {
  // step 5: consume context using custom hook
  const value = useDemoContext();

  return (
    <div>
      <h2>Demo Home</h2>
      <div>
        <p>Name: {value.name || "Not set"}</p>
        <p>Email: {value.email || "Not set"}</p>
      </div>
    </div>
  );
}
