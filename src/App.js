import React from "react";
// import Todo from "./Todo";
import TableInput from "./TableInput";

function App(props) {
  function ParentAlert(data) {
    console.log("Data", data);
  }
  return (
    <div>
      {/* <Todo alert={ParentAlert} /> */}
      <TableInput />
    </div>
  );
}

export default App;
