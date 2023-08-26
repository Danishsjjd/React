import useStorage from "./useStorage";

export default function StorageComponent() {
  const [name, setName, removeName] = useStorage("name", "danish");
  const [age, setAge, removeAge] = useStorage("age", 20, window.sessionStorage);

  return (
    <div style={{ border: "3px solid black" }}>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("sajjad")}>Set Name</button>
      <button onClick={() => setAge(45)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  );
}
