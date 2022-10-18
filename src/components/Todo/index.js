import React from "react";
import CreateTodo from "../CreateTodo";
import TodoList from "../TodoList";

function Todo({ todos }) {
  return (
    <div>
      <h1>SIMPLEST TODO WEB</h1>
      <CreateTodo todos={todos} />
      {todos && <TodoList todos={todos} />}
    </div>
  );
}

export default Todo;
