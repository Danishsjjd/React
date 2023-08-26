import { useEffect, useLayoutEffect, useRef, useState } from "react"

const UseLayoutEffect = () => {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const button = useRef()
  const popup = useRef()

  useLayoutEffect(() => {
    setShow2(show)
  }, [show])

  useEffect(() => {
    if (button.current == null || popup.current == null) return
    // const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `100px`
  }, [show2])

  return (
    <div style={{ position: "relative", border: "3px solid black" }}>
      <button ref={button} onClick={() => setShow((pre) => !pre)}>
        Toggle popup
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is the popup
        </div>
      )}
    </div>
  )
}

export default UseLayoutEffect
