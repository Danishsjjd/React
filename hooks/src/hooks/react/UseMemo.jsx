import { useState, useEffect, memo, useMemo, useCallback } from "react";

// if you have ton of functionality in this components and
// because of parent component re-render this component is also re-render than
// use this memo function
const UseMemo = memo(() => {
  const [number, setNumber] = useState("");
  const [dark, setDark] = useState(true);
  const [double, setDouble] = useState(0);

  const styled = useMemo(
    () => ({
      backgroundColor: dark ? "black" : "#ff9",
      color: dark ? "white" : "black",
    }),
    [dark]
  );

  const doubleNumber = useCallback(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return number * 2;
  }, [number]);

  useEffect(() => {
    console.log("useMemo styled is changed");
  }, [styled]);

  useEffect(() => {
    console.log("useMemo slow function is running");
    setDouble(doubleNumber());
  }, [doubleNumber]);

  console.log("memo is re-rendering");

  return (
    <div style={{ border: "3px solid black" }}>
      <ul>
        <li>use case:-</li>
        <li>for Referential Equality</li>
        <li>for slow function in which data is rarely changed</li>
        <li>
          memo vs callBack:- useCallback same as useMemo but its return function
          instead callback return value
        </li>
      </ul>
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        type="number"
      />
      <div style={styled}>{double}</div>
      <button onClick={() => setDark((pre) => (pre ? false : true))}>
        Change Theme
      </button>
    </div>
  );
});

export default UseMemo;
