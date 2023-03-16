import { useState } from "react";

function Todo(props) {
  const { todo, completeTodo, editTodoText, deleteTodo } = props;

  const [showInput, setShowInput] = useState(false);

  return (
    <li>
      <div>
        <h2 onClick={(e) => setShowInput(!showInput)}>{todo.text}</h2>
        <input
            onKeyDown={(e) => {
                if (e.key === "Enter"){
                    editTodoText(todo.id, e);
                    setShowInput(false);
                }
            }}
          style={{ display: showInput ? "block" : "none" }}
          placeholder="Update todo"
          type="text"
        />
      </div>

      <label>
        Complete{" "}
        <input
          onChange={(e) => completeTodo(todo.id, e)}
          type="checkbox"
          checked={todo.completed}
        />
      </label>
      
      <button onClick={(e) => deleteTodo(todo.id)}>DELETE</button>
    </li>
  );
}

export default Todo;
