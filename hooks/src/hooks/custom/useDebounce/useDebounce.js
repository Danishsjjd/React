import { useEffect } from "react";
import useTimeout from "../useTimeOut/useTimeout";

const useDebounce = (cb, delay, dependencies) => {
  const { clear, reset } = useTimeout(cb, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
};

export default useDebounce;
