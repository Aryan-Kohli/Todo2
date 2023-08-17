import React from "react";
import Todo from "./Todo";
export default function Todos(props) {
  const abc = props.alltodos.map((x) => {});
  return (
    <>
      {props.alltodos.length === 0 ? (
        ""
      ) : (
        <div
          style={{
            background: "pink",
            height: "3px",
          }}
        />
      )}

      <div className="container">
        <div className="row">
          {props.alltodos.length === 0 ? (
            <h1 className="no">Nothing to Display.</h1>
          ) : (
            props.alltodos.map((x) => {
              return <Todo key={x.sno} todo={x} ondelete={props.ondelete} />;
            })
          )}
        </div>
      </div>
    </>
  );
}
