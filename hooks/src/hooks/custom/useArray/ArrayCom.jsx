import React from "react";
import useArray from "./useArray";

const ArrayCom = () => {
  const { array, filter, push, set } = useArray([1, 2, 3, 4]);
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>{array.join(", ")}</h3>
      <button onClick={() => push(2)}>add 2</button>
      <button onClick={() => filter((n) => n !== 2)}>filter 2</button>
      <button onClick={() => set([1, 2])}>set 1, 2</button>
    </div>
  );
};

export default ArrayCom;
