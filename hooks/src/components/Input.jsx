import React, { useId, useImperativeHandle, useRef } from "react"

const Input = ({ value, onChange }, ref) => {
  const id = useId()
  const input = useRef(null)
  useImperativeHandle(
    ref,
    () => ({
      alertHi: () => input.current.focus(),
    }),
    []
  )
  return (
    <>
      <label htmlFor={id}>Email:</label>
      <input
        type={"text"}
        value={value}
        onChange={onChange}
        ref={input}
        id={id}
        style={{
          borderBottom: "1px solid black",
          margin: "5px",
          minWidth: "50%",
          background: "#f8444f",
          color: "white",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          padding: 5,
          fontSize: 20,
        }}
      />
    </>
  )
}

export default React.forwardRef(Input)
