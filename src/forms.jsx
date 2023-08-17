import React from "react";

export default function forms(props) {
  const [head, Sethead] = React.useState("");
  const [task, SetTask] = React.useState("");
  const submit = (e) => {
    e.preventDefault();
    if (head === "" || task === "") alert("Enter Both the fields Correctly");
    else {
      props.addtodo(head, task);
      Sethead("");
      SetTask("");
    }
  };
  return (
    <div className="container">
      <div className="row todohead">
        <h1>Enter Your task</h1>
      </div>
      <form onSubmit={submit}>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="head" className="lb">
              Enter Title:{" "}
            </label>
            <input
              type="text"
              name="head"
              id="head"
              onChange={(e) => {
                Sethead(e.target.value);
              }}
              value={head}
              placeholder="Enter the head"
              autocomplete="off"
            ></input>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <label htmlFor="task" className="lb">
              Enter Description:
            </label>
            <input
              type="text"
              name="task"
              id="task"
              onChange={(e) => {
                SetTask(e.target.value);
              }}
              value={task}
              placeholder="Enter the task"
              autocomplete="off"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 mt-3 mb-2">
            <button type="submit" className="btn-mine">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
