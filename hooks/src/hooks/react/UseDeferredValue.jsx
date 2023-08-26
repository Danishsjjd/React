import { useState } from "react"

import List from "../../components/List"

const UseDeferredValue = () => {
  const [input, setInput] = useState("")

  return (
    <div style={{ border: "3px solid black" }}>
      <ul>
        <li>see console</li>
        <li>
          If Value come from unknown place and want to use debounce or throttling than use deferred value clear from
          name
        </li>
      </ul>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} style={{ width: "100%" }} />
        <List input={input} />
      </div>
    </div>
  )
}

export default UseDeferredValue
