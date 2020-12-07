import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ToData from "./ToData";
import Todo from "./ToData";

function App() {
  const [todo, setTodo] = useState([""]);
  const [input, updateState] = useState("");
  console.log(input);
  const addTodo = () => {
    setTodo([...todo, input]);
    clerartext();
    updateState("");
  };

  const clerartext = () => {
    let textvalue = (document.getElementById("txt_entertask").value = "");
  };
  return (
    <div className="App">
      <h1 class="heading">Hello Rushikesh 📝 </h1>
      <form class="main-container">
        <div class="form-group mx-sm-3 mb-2">
          <input
            type="text"
            class="form-control txt_EnterTask"
            id="txt_entertask"
            placeholder="Enter Task ✏️"
            onChange={(e) => updateState(e.target.value)}
          />
        </div>
        <button
          type="submit"
          class="btn btn-warning mb-2 btnsubmit"
          onClick={addTodo}
          disabled={!input}
        >
          Add Task
        </button>
      </form>
      <div>
        {todo.map((toAdd) => (
          <ToData text={toAdd} />
        ))}
      </div>
    </div>
  );
}

export default App;
