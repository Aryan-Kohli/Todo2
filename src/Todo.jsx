import React from "react";

export default function Todo(props) {
  return (
    <div className="col-md-3 pt-3 pb-3 ektodo">
      <h1 style={{ textTransform: "uppercase" }}>{props.todo.head}</h1>
      <h1 style={{ fontFamily: "Roboto Slab" }}> {props.todo.task}</h1>
      <button
        className="btn-danger"
        onClick={(e) => props.ondelete(props.todo)}
      >
        Delete
      </button>
    </div>
  );
}
