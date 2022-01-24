import React, { useState } from "react";

function Todo() {
  const [data, setData] = useState("");
  const [dataValue, setDataValue] = useState([]);
  const onChange = (e) => {
    setData(e.target.value);
  };
  console.log(data);
  const addBtn = (e) => {
    if (!data) {
     
    } else {
      setDataValue([...dataValue, data]);
    
    }
  };
  const Edit = (e) => {
    alert("Edit");
  };
  const Trash = (id) => {
    console.log(id);
    const updatedItem = dataValue.filter((elem, ind) => {
      return ind !== id;
    });
    console.log(updatedItem);
    setDataValue(updatedItem);
  };

  return (
    <div className="container">
      <input type="text" className="form-control" onChange={onChange} />
      <input
        className="btn btn-primary"
        type="button"
        value={"add"}
        onClick={addBtn}
      />
      {dataValue.map((item, i) => (
        <div key={i}>
          <h3>
            <span>{i + 1} </span>
            {item}
            <span onClick={Edit} style={{ color: "green", cursor: "pointer" }}>
              Edit
            </span>{" "}
            <span
              onClick={(e) => Trash(i)}
              style={{ color: "red", cursor: "pointer" }}
            >
              Trash
            </span>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Todo;
