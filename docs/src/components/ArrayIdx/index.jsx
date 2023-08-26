import { memo, useState } from "react"

const messages = [
  { id: 1, str: "Hey, How are you?" },
  { id: 2, str: "Fine, How are you doing?" },
  { id: 3, str: "Alhumdulilha!" },
  { id: 4, str: "Oh that nice, bye will see you soon. Inshallah 🙌" },
]

const ArrayIdx = () => {
  const [msgs, setMsgs] = useState(() => messages)

  return (
    <div>
      {msgs.map((message, idx) => (
        // if you provide index as a key react don't know which element is remove so it will remove the last element from the array will lead to unexpected results if you are using impure component like input with defaultValue
        <div key={idx} style={{ display: "flex", gap: 8 }}>
          <Para para={message} />
          <input defaultValue={message.str} />
          <button onClick={() => setMsgs((pre) => pre.filter((_, i) => i != idx))}>-</button>
        </div>
      ))}
    </div>
  )
}

const Para = memo(
  ({ para }) => {
    console.log("Para: rerender")
    return <p>{para.str}</p>
  },
  (prevProp, nextProp) => prevProp.para.id === nextProp.para.id
)

export default ArrayIdx
