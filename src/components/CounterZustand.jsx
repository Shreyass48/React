import React from "react";
import { useBear } from "../zustand/store";

export default function CounterZustand() {
  // step 2: consume store state and actions using custom hook
  const bears = useBear((state) => state.bears);
  const increasePopulation = useBear((state) => state.increasePopulation);
  const updateBears = useBear((state) => state.updateBears);

  return (
    <div>
      <h1>{bears} bears around here...</h1>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={() => updateBears(10)}>set to 10</button>
    </div>
  );
}
