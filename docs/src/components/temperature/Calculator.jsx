import React from "react";
import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

const Calculator = () => {
  const [scale, setScale] = useState("c");
  const [temperature, setTemperature] = useState(0);
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;

  const changeHandler = (e, updatedScale) => {
    setTemperature(e.target.value);
    setScale(updatedScale);
  };

  return (
    <div>
      <TemperatureInput
        scale={"c"}
        temperature={celsius}
        changeHandler={changeHandler}
      />
      <TemperatureInput
        scale={"f"}
        temperature={fahrenheit}
        changeHandler={changeHandler}
      />
      <div>The water would {celsius > 100 ? "be" : "not"} boil.</div>
    </div>
  );
};

export default Calculator;

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(tem, converter) {
  const value = parseInt(tem);
  if (Number.isNaN(value)) return "";
  const convertedOutput = converter(tem);
  const rounded = Math.round(convertedOutput * 1000) / 1000;
  return rounded.toString();
}
