import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // actual logic
    console.log("count is : ", count);

    // return a cleanup function if needed
    return () => {
      console.log("cleanup function called");
    };
  }, [count]); // dependency array

  return (
    <div className="border border-gray-400 p-5 flex justify-center items-center">
      <div className="space-y-2">
        <h1 className="text-lg font-semibold pl-16">Count : {count}</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded ml-2"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
