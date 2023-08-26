import React from "react"

import Box from "../../components/Box"

import ThemeProvider from "../../context/ThemeProvider"

const UseContext = () => {
  return (
    <ThemeProvider>
      <Box />
    </ThemeProvider>
  )
}

export default UseContext
