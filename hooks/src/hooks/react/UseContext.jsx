import React from "react";
import ThemeProvider from "../../context/ThemeProvider";
import Box from "../../components/Box";

const UseContext = () => {
  return (
    <ThemeProvider>
      <Box />
    </ThemeProvider>
  );
};

export default UseContext;
