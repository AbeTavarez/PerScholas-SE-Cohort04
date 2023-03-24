import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../features/todos/todosSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todosData);
  console.log(todos);

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todos</h1>

      <label>
        Create todo:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => dispatch(addTodo({ id: uuidv4(), text: text }))}>
          Create
        </button>
      </label>

      <div>
        {todos.map((item) => {
          return (
            <div>
              <h3>{item.text}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
