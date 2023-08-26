import "./body.css"
import useDarkMode from "./useDarkMode"

export default function DarkModeComponent() {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <div style={{ border: "3px solid black" }}>
      <button
        onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
        style={{
          border: `1px solid ${darkMode ? "white" : "black"}`,
          background: "none",
          color: darkMode ? "white" : "black",
        }}
      >
        Toggle Dark Mode
      </button>
    </div>
  )
}
