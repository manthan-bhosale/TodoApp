import React, { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodods = todos.filter((todo) => todo.done).length;
  const totaltodos = todos.length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer
        completedTodods={completedTodods}
        totaltodos={totaltodos}
      ></Footer>
    </div>
  );
}

export default Todo;
