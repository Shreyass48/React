import React from "react";

export default function EventHandling() {
  // Event handling in React is done using camelCase syntax and passing a function as the event handler.
  const handleBtnClicked = (event) => {
    // here we get synthetic event object which is a wrapper around the native event object provided by the browser.
    console.log("Button clicked", event);
  };

  return (
    <div>
      {/* event handling : onClick */}
      <button onClick={handleBtnClicked}>Click</button>
    </div>
  );
}
