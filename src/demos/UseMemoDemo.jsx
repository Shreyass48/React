import { useMemo, useState } from "react";
import { initialItems } from "../utils/memoData";

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // wrong way to find the selected item in the items array
  //   const selectedItem = items.find((item) => item.isSelected);

  // when you have a large array and you want to find an item in it,
  //  you can use useMemo to memoize the result of the find operation.
  //  This way, the find operation will only be performed when the items array changes,
  //  and not on every render.
  const selectedItem = useMemo(() => {
    return items.find((item) => item.isSelected);
  }, [items]);

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseMemoDemo;
