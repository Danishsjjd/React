import TicTacToe from "./components/TicTacToe"
import Calculator from "./components/temperature/Calculator"
import Products from "./components/thinkingInReact/Products"

import "./style.css"

const App = () => {
  return (
    <>
      <Calculator />
      <br />
      <br />
      <Products />
      <br />
      <br />
      <TicTacToe />
    </>
  )
}

export default App
