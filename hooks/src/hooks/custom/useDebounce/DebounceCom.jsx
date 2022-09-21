import React from "react";
import { useState } from "react";
import useDebounce from "./useDebounce";

const DebounceCom = () => {
  const [count, setCount] = useState(0);

  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div style={{ border: "3px solid black" }}>
      <h3>{count}</h3>
      <button onClick={() => setCount((pre) => ++pre)}>increment</button>
    </div>
  );
};

export default DebounceCom;
