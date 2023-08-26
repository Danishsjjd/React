import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const useToggleTheme = () => {
  return useContext(ThemeUpdateContext)
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme((pre) => (pre ? false : true))
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
export default ThemeProvider
