import { ACTIONS } from "../hooks/react/UseReducer"
import React from "react"

const Todo = ({ todo, dispatch }) => {
  return (
    <ul>
      <li style={{ color: todo.completed ? "#AAA" : "#000" }}>{todo.name}</li>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_COMPLETED,
            payload: { id: todo.id },
          })
        }
      >
        Completed
      </button>
    </ul>
  )
}

export default Todo
