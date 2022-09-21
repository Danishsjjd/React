import React from "react";
import { useState } from "react";
import usePrevious from "./usePrevious";

const PreviousCom = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div style={{ border: "3px solid black" }}>
      <h3>
        {count} - {previousCount}
      </h3>
      <button onClick={() => setCount((pre) => ++pre)}>Increment</button>
      <button onClick={() => setCount((pre) => --pre)}>Decrement</button>
    </div>
  );
};

export default PreviousCom;
