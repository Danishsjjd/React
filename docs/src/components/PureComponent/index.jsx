import { memo, useState } from "react"

const getParas = () => [
  { id: 1, str: "Hey, How are you?" },
  { id: 2, str: "Fine, How are you doing?" },
  { id: 3, str: "Alhumdulilha!" },
  { id: 4, str: "Oh that nice, bye will see you soon. Inshallah 🙌" },
]

const PureComponent = () => {
  const [count, setCount] = useState(0)
  const paras = getParas()

  return (
    <>
      <button onClick={() => setCount((pre) => ++pre)}>count {count}</button>
      {paras.map((para) => (
        <Para key={para.id} para={para} />
      ))}
    </>
  )
}

const Para = memo(
  ({ para }) => {
    // console.log("Para: rerender")
    return <p>{para.str}</p>
  },
  (prevProp, nextProp) => prevProp.para.id === nextProp.para.id
)

export default PureComponent
