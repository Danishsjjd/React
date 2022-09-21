import { useState } from "react";
import { useRef } from "react";
// see this component to know the use can of ImperativeHandle
import Input from "../../components/Input";
import Model from "../../components/Model";

const UseImperativeHandle = () => {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const input = useRef(null);
  const dialog = useRef(null);

  return (
    <div style={{ border: "3px solid black" }}>
      <h3>Example no 1</h3>
      <Input
        onChange={(e) => setName(e.target.value)}
        ref={input}
        value={name}
      />
      <button onClick={() => input.current.alertHi()}>focus</button>
      <h3>Example no 2</h3>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <button onClick={() => dialog.current.focusClose()}>focus Close</button>
      <button onClick={() => dialog.current.focusConfirm()}>
        focus confirm
      </button>
      <button onClick={() => dialog.current.focusDeny()}>focus deny</button>
      <Model ref={dialog} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default UseImperativeHandle;
