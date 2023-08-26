import { useState } from "react"

import usePrevious from "./usePrevious"

export default function PreviousComponent() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("danish")
  const previousCount = usePrevious(count)

  return (
    <div style={{ border: "3px solid black" }}>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>Increment</button>
      <button onClick={() => setName("sajjad")}>Change Name</button>
    </div>
  )
}
