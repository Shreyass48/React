import React, { memo } from "react";

export default memo(function Child1({ value }) {
  console.log("Child 1 rerender");
  return (
    <div>
      <p>Child 1: {value}</p>
    </div>
  );
});
