import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ selected, task, toggleComplete, deleteTodo, onClick }) => {
  
  return (
    <div className={`Todo ${selected === true ? "selected" : ""}`} onClick={onClick}>
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed === true ? "completed" : "incompleted"} `}
        style={{ cursor: "pointer" }}
      >
        {task.task}
      </p>
      {selected && (
        <div>
          <FontAwesomeIcon icon={faPenToSquare} />
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
      )}
    </div>
  );
};

export default Todo;
