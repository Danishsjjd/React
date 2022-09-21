import { useTheme, useToggleTheme } from "../context/ThemeProvider";

export default function FunctionContextComponent() {
  const toggle = useToggleTheme();
  const dark = useTheme();
  const themeStyle = {
    backgroundColor: dark ? "#333" : "#ccc",
    color: dark ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <div style={{ border: "3px solid black" }}>
      <ul>
        <li>solution for manage state</li>
        <li>
          if state changed, cause re-render in all components where we use
          context state. redux don't, That's why i like redux 💝
        </li>
      </ul>
      <div style={themeStyle}>FunctionContextComponent</div>
      <button onClick={() => toggle()}>toggle Theme</button>
    </div>
  );
}
