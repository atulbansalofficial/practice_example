import React, { useState, useEffect } from "react";

function Todo() {
  const [data, setData] = useState("");
  const [dataValue, setDataValue] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [isEdit, setIsEdit] = useState(null);

  const onChange = (e) => {
    setData(e.target.value);
  };
  
  const addBtn = (e) => {
    if (!data) {
    } else if (data && !toggle) {
      setDataValue(
        dataValue.map((elem) => {
          if (elem.id === isEdit) {
            return { ...elem, name: data };
          }
          return elem;
        })
      );
      setToggle(true);
      setData("");
      setIsEdit(null);
    } else {
      const allInputData = { id: new Date().getTime().toString(), name: data };
      setDataValue([...dataValue, allInputData]);
      setData("");
    }
  };
  const Edit = (id) => {
    let newEdititem = dataValue.find((elem) => {
      return elem.id === id;
    });
    console.log(newEdititem);
    setToggle(false);
    setData(newEdititem.name);
    setIsEdit(id);
  };
  const Trash = (index) => {
    const updatedItem = dataValue.filter((elem) => {
      return index !== elem.id;
    });
    console.log(updatedItem);
    setDataValue(updatedItem);
  };

  return (
    <div className="container">
      <input
        type="text"
        className="form-control"
        value={data}
        onChange={onChange}
      />
      {toggle ? (
        <input
          className="btn btn-primary"
          type="button"
          value={"add"}
          onClick={addBtn}
        />
      ) : (
        <input
          className="btn btn-primary"
          type="button"
          value={"Edit"}
          onClick={addBtn}
        />
      )}

      {dataValue.map((item, i) => (
        <div key={item.id}>
          <h3>
            <span>{i + 1} </span>
            {item.name}
            <span
              onClick={(e) => Edit(item.id)}
              style={{ color: "green", cursor: "pointer" }}
            >
              Edit
            </span>{" "}
            <span
              onClick={(e) => Trash(item.id)}
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
