import { useState } from "react";

import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    // checks if the input is empty
    if (e.target.value === "") return;
    // create a todo object
    const newTodo = {
      text: e.target.value,
      id: Date.now(),
      completed: false,
    };
    // add the new todo to the array
    setTodos([...todos, newTodo]);
    // reset the input
    e.target.value = "";
  };

  const completeTodo = (id, e) => {
    // create a new copy of the todos array
    const todosCopy = [...todos];
    // find the todo that matches the id
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    // update the current completed value to the opposite value
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed;
    setTodos([...todosCopy]);
  };

  const editTodoText = (id, e) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    todosCopy[indexOfTodo].text = e.target.value;
    setTodos([...todosCopy]);
    e.target.value = "";
  };

  const deleteTodo = (id) => {
    console.log(id);
   const todosCopy = [...todos];
   const indexOfTodo = todosCopy.findIndex(i => i.id === id);
   todosCopy.splice(indexOfTodo, 1);
   setTodos( [...todosCopy] )
  }

  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        editTodoText={editTodoText}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
