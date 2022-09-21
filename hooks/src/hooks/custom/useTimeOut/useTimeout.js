import { useCallback, useEffect, useRef } from "react";

const useTimeout = (cb, delay) => {
  const callback = useRef(null);
  const timeout = useRef(null);

  useEffect(() => {
    callback.current = cb;
  }, [cb]);

  const set = useCallback(() => {
    timeout.current = setTimeout(() => {
      callback.current();
    }, delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeout.current && clearTimeout(timeout.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, clear, set]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { clear, reset };
};

export default useTimeout;
