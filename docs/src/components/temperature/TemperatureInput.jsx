import React from "react";

const scales = {
  c: "celsius",
  f: "fahrenheit",
};

const TemperatureInput = ({ changeHandler, temperature, scale }) => {
  return (
    <fieldset>
      <legend>Enter Temperature in {scales[scale]}</legend>
      <input
        type="number"
        value={temperature}
        onChange={(e) => changeHandler(e, scale)}
      />
    </fieldset>
  );
};

export default TemperatureInput;
