import "./App.css";
import React from "react";

import Todos from "./Todos";
import Todo from "./Todo";
import Header from "./header";
import Forms from "./forms.jsx";
function App() {
  const init =
    JSON.parse(localStorage.getItem("Todo")) === null
      ? []
      : JSON.parse(localStorage.getItem("Todo"));
  function addtodo(head, task) {
    if (head == "" || task == "") {
      alert("Enter all the values");
    } else {
      console.log(head, " ", task);
      let sno = 0;
      if (alltodos.length === 0) sno = 0;
      else sno = alltodos.length;
      let obj = {
        sno: sno,
        head: head,
        task: task,
      };
      setAllTodos([...alltodos, obj]);
      console.log(alltodos);
    }
  }
  const [alltodos, setAllTodos] = React.useState(init);
  React.useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(alltodos));
  }, [alltodos]);
  function ondelete(todo) {
    console.log(
      "The todo which is to be deleted is : ",
      todo.head,
      " ",
      todo.task
    );
    setAllTodos(
      alltodos.filter((e) => {
        return e !== todo;
      })
    );
  }
  return (
    <>
      <Header />
      <Forms addtodo={addtodo} />
      <Todos alltodos={alltodos} ondelete={ondelete} />
    </>
  );
}

export default App;
