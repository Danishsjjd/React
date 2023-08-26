import { useState } from "react"

const allProducts = [
  { name: "another", id: 1, quantity: 1 },
  { name: "one", id: 2, quantity: 1 },
  { name: "two", id: 3, quantity: 1 },
]

const UseState = () => {
  const random = Math.random()
  const generateRandomValue = () => Math.round(2 * random * 1000) / 1000

  // can take callback function
  const [inputNumber, setInputNumber] = useState(generateRandomValue)
  const [count, setCount] = useState(0)

  const [products, setProducts] = useState(allProducts)
  // always have reference instead of whole product so if product change than the selected product will change realtime
  const [selectedId, setSelectedId] = useState()

  const selectedProduct = products.find((product) => product.id === selectedId)

  // always spread state value from function callback args
  const incrementCount = () => {
    setCount((pre) => ++pre)
  }
  const decrementCount = () => {
    setCount((pre) => ++pre)
  }

  const incrementProduct = (id) => {
    const updateProducts = products.map((product) => {
      if (product.id === id) return { ...product, quantity: ++product.quantity }
      return product
    })
    setProducts(updateProducts)
  }
  const decrementProduct = (id) => {
    const updateProducts = products.map((product) => {
      if (product.id === id) return { ...product, quantity: --product.quantity }
      return product
    })
    setProducts(updateProducts)
  }

  return (
    <div style={{ border: "3px solid black" }}>
      <ul>
        <li>can take callback function</li>
        <li>spread state value from function callback args</li>
      </ul>
      <input
        type="number"
        name="number"
        id="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <div>
        <button onClick={incrementCount}>-</button>
        <span>{count}</span>
        <button onClick={decrementCount}>+</button>
      </div>
      {/* copy */}
      <div className="min-w-screen grid min-h-screen content-start justify-center gap-6">
        <h1 className="text-center font-bold">All Products</h1>
        {products.map((product) => {
          return (
            <div className="min-w-[200px] space-y-4" key={product.id}>
              <div className="flex items-center justify-between gap-2">
                {product.name}
                <button
                  className="rounded-full bg-red-400 p-3 text-white  hover:bg-red-700"
                  onClick={() => setSelectedId(product.id)}
                >
                  Choose
                </button>
              </div>
              <div className="flex w-full items-center justify-between gap-2">
                <button
                  className="rounded-full bg-red-400 p-3 text-white  hover:bg-red-700"
                  onClick={() => decrementProduct(product.id)}
                >
                  -
                </button>
                <div>{product.quantity}</div>
                <button
                  className="rounded-full bg-red-400 p-3 text-white  hover:bg-red-700"
                  onClick={() => incrementProduct(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          )
        })}
        <h1 className="text-center font-bold">Choose Product</h1>
        {selectedProduct && (
          <div>
            <div className="mx-auto flex max-w-xl items-center justify-between gap-2">
              {selectedProduct.name} have {selectedProduct.quantity} quantity
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UseState
