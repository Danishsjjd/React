import React from "react"
import ReactDOM from "react-dom/client"

import CustomHooks from "./hooks/custom/CustomHooks"

import MemoTest from "./components/MemoTest"

import {
  UseContext,
  UseDeferredValue,
  UseEffect,
  UseId,
  UseImperativeHandle,
  UseLayoutEffect,
  UseReducer,
  UseRef,
  UseState,
  UseTransition,
} from "./hooks"
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <>
      <h2>useState</h2>
      <UseState />

      <h2>useEffect</h2>
      <UseEffect />

      <h2>useContext</h2>
      <UseContext />

      <h2>UseRef</h2>
      <UseRef />

      <h2>useMemo</h2>
      <MemoTest />

      <h2>useReducer</h2>
      <UseReducer />

      <h2>useTransition</h2>
      <UseTransition />

      <h2>useDeferredValue</h2>
      <UseDeferredValue />

      <h2>useLayoutEffect</h2>
      <UseLayoutEffect />

      <h2>UseDebugValue</h2>
      <div style={{ border: "3px solid black" }}>
        <h3>see useLocalStorage in custom Hooks</h3>
      </div>

      <h2>useImperativeHandles</h2>
      <UseImperativeHandle />

      <h2>useId</h2>
      <UseId />

      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>Custom Hooks</h1>
      <CustomHooks />
    </>
  </React.StrictMode>
)
