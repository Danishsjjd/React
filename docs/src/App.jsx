import ArrayIdx from "./components/ArrayIdx"
import PureComponent from "./components/PureComponent"
import TicTacToe from "./components/TicTacToe"
import Calculator from "./components/temperature/Calculator"
import Products from "./components/thinkingInReact/Products"

import "./style.css"

const App = () => {
  return (
    <>
      <h1>Calculator</h1>
      <Calculator />
      <br />
      <br />
      <h1>Products</h1>
      <Products />
      <br />
      <br />
      <h1>TicTacToe</h1>
      <TicTacToe />
      <br />
      <br />
      <h1>PureComponent</h1>
      <PureComponent />
      <br />
      <br />
      <h1>ArrayIdx</h1>
      <ArrayIdx />
    </>
  )
}

export default App
