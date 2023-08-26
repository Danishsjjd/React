import React from "react"
import { useRef } from "react"
import { useImperativeHandle } from "react"

const Model = ({ isOpen, onClose }, ref) => {
  const yes = useRef(null)
  const no = useRef(null)
  const close = useRef(null)

  useImperativeHandle(
    ref,
    () => ({
      focusConfirm: () => yes.current.focus(),
      focusDeny: () => no.current.focus(),
      focusClose: () => close.current.focus(),
    }),
    []
  )

  return (
    <dialog ref={ref} open={isOpen}>
      <h1>Title</h1>
      <p>Are you sure?</p>
      <button onClick={onClose} ref={yes}>
        Yes
      </button>
      <button onClick={onClose} ref={no}>
        No
      </button>
      <button onClick={onClose} ref={close}>
        Close
      </button>
    </dialog>
  )
}

export default React.forwardRef(Model)
