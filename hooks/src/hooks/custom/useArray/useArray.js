import { useState } from "react";

const useArray = (arr) => {
  const [array, setArray] = useState(arr);
  const push = (...params) => setArray((pre) => [...pre, ...params]);
  const set = (newArr) => setArray(newArr);
  const filter = (cb) => setArray((perArr) => perArr.filter(cb));

  return { push, filter, array, set };
};

export default useArray;
