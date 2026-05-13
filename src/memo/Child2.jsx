import React from "react";

export default function Child2({ value }) {
  console.log("Child 2 rerender");
  return (
    <div>
      <p>Child 2: {value}</p>
    </div>
  );
}
