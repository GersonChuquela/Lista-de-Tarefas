/* eslint-disable no-unused-vars */
import React from "react";

const todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">({todo.category})</p>
        </div>
        <div>
          <button className="complete" onClick={() => completeTodo(todo.id)}>
            Completar
          </button>
          <button className="remove" onClick={() => removeTodo(todo.id)}>
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default todo;
