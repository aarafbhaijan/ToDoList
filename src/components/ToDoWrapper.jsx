import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (todo !== "") {
      setTodos([
        ...todos,
        { id: uuidv4(), completed: false, isEditing: false, task: todo },
      ]);
    }
  };
  const toggleComplete = (id) => {
    setTodos(() =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos((todos) =>
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, ind) => (
        <Todo
          task={todo}
          key={ind}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default ToDoWrapper;
