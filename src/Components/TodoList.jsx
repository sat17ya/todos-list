import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (data) => {
    if (!data.text || /^\s*$/.test(data.text)) {
      return;
    }
    const newTodos = [data, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((data) => data.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newVal) => {
    if (!newVal.text || /^\s*$/.test(newVal.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newVal : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((data) => {
      if (data.id === id) {
        data.isComplete = !data.isComplete;
      }
      return data;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's Gonna Do Today ?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}
