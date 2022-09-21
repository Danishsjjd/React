import { useReducer, useState } from "react";
import Todo from "../../components/Todo";

export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
  DELETE_TODO: "DELETE_TODO",
};

const initialValues = {
  todo: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      return { ...state, todo: [...state.todo, action.payload] };
    }
    case ACTIONS.DELETE_TODO: {
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case ACTIONS.TOGGLE_COMPLETED: {
      return {
        ...state,
        todo: state.todo.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          } else return todo;
        }),
      };
    }
    default:
      return state;
  }
}
const UseReducer = () => {
  const [{ todo }, dispatch] = useReducer(reducer, initialValues);
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { name: name, id: Date.now() },
    });
    setName("");
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <ul>
        <li>more like redux reducer needs actions to change data</li>
        <li>best for knowing why and how data is change</li>
      </ul>
      <form onSubmit={submitHandler}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      {todo.map((singleTodo) => {
        return (
          <Todo key={singleTodo.id} todo={singleTodo} dispatch={dispatch} />
        );
      })}
    </div>
  );
};

export default UseReducer;
