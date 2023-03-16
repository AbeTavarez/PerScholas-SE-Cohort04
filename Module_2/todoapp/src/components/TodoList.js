import Todo from "./Todo";

function TodoList(props) {
  const { todos, addTodo, completeTodo, editTodoText, deleteTodo } = props;

  // console.log(todos);

  return (
    <>
      <h1>Create Todo </h1>
      <input
        placeholder="Create a todo"
        type="text"
        onKeyDown={(e) => e.key === "Enter" && addTodo(e)}
      />

      {todos.length ? (
        <>
          <h1>Todo Items</h1>
          <ul className="todolist">
            {todos
              .filter((i) => !i.completed)
              .map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo={deleteTodo}
                  />
                );
              })}
          </ul>
          <h1>Completed Items</h1>
          <ul className="todolist">
            {todos
              .filter((i) => i.completed)
              .map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo={deleteTodo}
                  />
                );
              })}
          </ul>
        </>
      ) : (
        <h1>No Todos Added Yet</h1>
      )}
    </>
  );
}

export default TodoList;
