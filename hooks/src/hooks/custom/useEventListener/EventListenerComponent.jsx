import { useState } from "react"

import useEventListener from "./useEventListener"

export default function EventListenerComponent() {
  const [key, setKey] = useState("")
  useEventListener("keydown", (e) => {
    setKey(e.key)
  })

  return <div style={{ border: "3px solid black" }}>Last Key: {key}</div>
}
