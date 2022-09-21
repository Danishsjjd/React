import useLocalStorage from "./useLocalStorage";
import { useState } from "react";

const LocalStorage = () => {
  const [firstName, setFirstName, remove] = useLocalStorage("firstName", "");
  const [lastName, setLastName] = useState("");

  return (
    <div style={{ border: "3px solid black" }}>
      <input
        name="firstName"
        onChange={(e) => setFirstName(e.target.value)}
        placeholder={"Enter first name"}
        type="text"
        value={firstName}
      />
      <input
        name="lastName"
        onChange={(e) => setLastName(e.target.value)}
        placeholder={"Enter last name"}
        type="text"
        value={lastName}
      />
      <button onClick={() => remove()}>remove localStorage</button>
    </div>
  );
};

export default LocalStorage;
