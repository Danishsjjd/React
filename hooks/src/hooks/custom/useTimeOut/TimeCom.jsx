import React from "react";
import { useState } from "react";
import useTimeout from "./useTimeout";

const TimeCom = () => {
  const [count, setCount] = useState(10);
  const { reset, clear } = useTimeout(() => setCount(0), 2000);
  return (
    <div style={{ border: "3px solid black" }}>
      <h3>count is {count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <button onClick={reset}>reset</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};

export default TimeCom;
