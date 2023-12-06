import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
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
          selected={selectedId === todo.id}
          task={todo}
          key={ind}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          onClick={() => {
            if(selectedId===todo.id){
              setSelectedId(null)
            }else{
              setSelectedId(todo.id)
            }
          }}
        />
      ))}
    </div>
  );
};

export default ToDoWrapper;
