import { useEffect, useRef, useState } from "react"

const UseRef = () => {
  const [name, setName] = useState("")

  const renderCount = useRef(0)
  const input = useRef()

  const clickHandler = () => {
    input.current.focus()
    input.current.value = "value"
  }

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <div style={{ border: "3px solid black" }}>
      <ul>
        <li>it's like useState but never causes re-render</li>
        <li>use to give reference in jsx</li>
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={input}
        style={{ width: "100%" }}
        placeholder="can use console.count() instead "
      />
      <button onClick={clickHandler}>focus input</button>
      <div>This component is render {renderCount.current} times</div>
    </div>
  )
}

export default UseRef
