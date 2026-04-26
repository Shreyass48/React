import React, { useReducer } from "react";

// Reducer function to manage state transitions
function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "increment":
      const newCount = state.count + 1;
      if (newCount > 5) {
        return { ...state, error: "Count cannot exceed 5" };
      }
      return { ...state, count: newCount, error: null };
    case "decrement":
      const newDecrement = state.count - 1;
      if (newDecrement < 0) {
        return { ...state, error: "Count cannot be negative" };
      }
      return { ...state, count: newDecrement, error: null };
    default:
      throw new Error("Unknown action type");
  }
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <div>Count: {state.count}</div>
      {state.error && <div className="mb-2 text-red-500">{state.error}</div>}
      <button className="mb-2" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

// useReducer is a powerful hook for managing complex state logic
// in React components. It allows you to centralize state updates
// and handle them in a predictable way using a reducer function. In this example, we have a simple counter application that demonstrates how to use useReducer to manage the count state and handle edge cases like preventing the count from going below 0 or above 5.

// useState vs useReducer:
// - useState is great for simple state management, while useReducer is better suited for more complex state logic.
// - useReducer allows you to centralize state updates in a reducer function, making it easier to manage and debug state changes.
// - useReducer can help improve performance by preventing unnecessary re-renders when the state changes, as it only updates the specific part of the state that has changed.
