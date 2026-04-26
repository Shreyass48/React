import React, { useState, useRef, useEffect } from "react";

export function UseRefDemo() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    // ref logs will always be one step ahead of the state logs
    // because the state update is asynchronous and will not reflect
    // the updated value until the next render, while the ref update
    // is synchronous and will reflect the updated value immediately.
    console.log("countRef: ", countRef.current);
    console.log("State:", count);
  };

  return (
    <div className="space-y-2">
      <>
        <h1>Count: {count}</h1>

        {/* This will not cause a re-render so value is not updated in the UI */}
        <h2>Ref Count: {countRef.current}</h2>

        <button
          onClick={handleIncrement}
          className="bg-blue-400 p-1 rounded-lg "
        >
          Increment
        </button>
      </>
    </div>
  );
}

// useRef can also be used to access DOM elements directly,
// similar to how you would use document.getElementById or document
export function UseRefHTMLDemo() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="tutorial">
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
}

// useState vs useRef

// useState is used to manage state in a functional component.
// It causes a re-render of the component when the state is updated.
// The updated state value is reflected in the UI on the next render.

// useRef is used to create a mutable ref object that persists for
// the lifetime of the component. It does not cause a re-render when
// the ref value is updated. The updated ref value is available
// immediately, but it will not be reflected in the UI until the
// next render.
