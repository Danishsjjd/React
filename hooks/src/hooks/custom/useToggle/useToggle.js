import { useState } from "react";

const useToggle = (initialValue) => {
  const [value, setValue] = useState(() => {
    if (typeof initialValue === "boolean") return initialValue;
    return false;
  });
  function toggleValue(val) {
    if (typeof val === "boolean") return setValue(val);
    setValue((pre) => !pre);
  }
  return [value, toggleValue];
};

export default useToggle;
