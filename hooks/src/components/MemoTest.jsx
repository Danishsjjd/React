import React from "react"
import { useState } from "react"

import { UseMemo } from "../hooks"

const MemoTest = () => {
  const [name, setName] = useState("")
  return (
    <div style={{ border: "3px solid black" }}>
      <h3>Parent</h3>
      <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <UseMemo />
    </div>
  )
}

export default MemoTest
