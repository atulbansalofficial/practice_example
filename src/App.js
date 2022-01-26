import React from "react";
import Todo from "./Todo";

function App(props) {
  function ParentAlert(data) {
    console.log("Data", data);
  }
  return (
    <div>
      <Todo alert={ParentAlert} />
    </div>
  );
}

export default App;
