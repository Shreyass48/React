import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../redux/feature/counter/counterSlice";

export default function CounterRedux() {
  // step 4: use useSelector to access the state from the store
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  console.log("CounterRedux rendered", count);

  // step 5: use useDispatch to dispatch actions to the store
  function incClick() {
    dispatch(increment());
  }

  function decClick() {
    dispatch(decrement());
  }

  function resetClick() {
    dispatch(reset());
  }
  return (
    <div className="flex gap-4">
      <button onClick={incClick}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={decClick}>Decrement</button>
      <button onClick={resetClick}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}
