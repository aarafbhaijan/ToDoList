import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [values, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(values);
    setValue("");
  };

  return (
    <form className="Todoform" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={values}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todobtn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
