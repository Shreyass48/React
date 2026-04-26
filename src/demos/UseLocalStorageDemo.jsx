import React, { useState } from "react";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";

export default function UseLocalStorageDemo() {
  const [value, setValue] = useState();

  const { setItem, getItem, removeItem } = useLocalStorage("myKey");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">useLocalStorage Demo</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <div className="flex gap-2">
        <button
          className="bg-blue-500 p-2 rounded-md"
          onClick={() => setItem(value)}
        >
          Set
        </button>
        <button
          className="bg-blue-500 p-2 rounded-md"
          onClick={() => console.log(getItem())}
        >
          Get
        </button>
        <button
          className="bg-blue-500 p-2 rounded-md"
          onClick={() => {
            removeItem();
            setValue("");
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
