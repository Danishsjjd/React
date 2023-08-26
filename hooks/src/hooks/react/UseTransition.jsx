import { useState, useTransition } from "react"

const UseTransition = () => {
  const [pending, startTransition] = useTransition()
  const [list, setList] = useState([])
  const [name, setName] = useState("")
  const handleChange = (e) => {
    setName(e.target.value)
    startTransition(() => {
      const newList = []
      const LIST_SIZE = 2000
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(e.target.value)
      }
      setList(newList)
    })
  }
  return (
    <div style={{ border: "3px solid black", display: "flex", flexWrap: "wrap" }}>
      <ul>
        <li>add transition between state's</li>
        <li>
          react calculate all the state change then update dom because of transition we can update a state later which
          take's time to update
        </li>
      </ul>
      <input type="text" value={name} onChange={handleChange} style={{ width: "100%" }} />
      {/* {list.map((singleItem, index) => {
        return <div key={index}>{singleItem}</div>;
      })} */}
      {pending
        ? "Loading..."
        : list.map((singleItem, index) => {
            return <div key={index}>{singleItem}</div>
          })}
    </div>
  )
}
export default UseTransition
