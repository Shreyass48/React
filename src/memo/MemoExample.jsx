import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

// when you enabled react compiler preset, it will automatically memoize the component, so you don't need to wrap it with memo() function. It will only re-render when the props change, otherwise it will return the cached result from the previous render.

export default function MemoExample() {
  const [parent, setParent] = useState(0);
  const [child1, setChild1] = useState(0);
  const [child2, setChild2] = useState(0);

  console.log("Parent rerender");

  const updateParent = () => {
    setParent(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <>
      <p>Parent: {parent}</p>
      <button onClick={updateParent}>Update Parent</button>
      <Child1 value={child1} />
      <Child2 value={child2} />
    </>
  );
}
