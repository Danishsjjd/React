import { useRef } from "react";

const usePrevious = (state) => {
  const current = useRef(state);
  const previousCount = useRef();

  if (current.current !== state) {
    previousCount.current = current.current;
    current.current = state;
  }
  return previousCount.current;
};

export default usePrevious;
