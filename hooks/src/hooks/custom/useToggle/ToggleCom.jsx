import React from "react";

import useToggle from "./useToggle";

const ToggleCom = () => {
  const [value, toggle] = useToggle(true);
  return (
    <div style={{ border: "3px solid black" }}>
      <h3>Value is: {value.toString()}</h3>
      <button onClick={toggle}>toggle</button>
      <button onClick={() => toggle(true)}>true</button>
      <button onClick={() => toggle(false)}>false</button>
    </div>
  );
};

export default ToggleCom;
