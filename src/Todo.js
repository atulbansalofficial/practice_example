import React, { useState } from "react";

function Todo() {
  const [data, setData] = useState({
    skil: "",
    skilExp: "",
  });
  const [print, setPrint] = useState([]);
  const onSubmit = (e) => {
    console.log(data.skil, data.skilExp);
    const getIdData = { id: new Date().getTime().toString(), data };
    setPrint([...print, getIdData]);
  };
  const onChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    const value = e.target.value;
    const name = e.target.name;

    setData((preValue) => {
      console.log(preValue);
      if (name === "skil") {
        return {
          skil: value,
          skilExp: preValue.skilExp,
        };
      } else if (name === "skilExp") {
        return {
          skil: preValue.skil,
          skilExp: value,
        };
      }
    });
  };
  const Trash = (index) => {
    const updatedItem = print.filter((elem) => index !== elem.id);
    console.log(updatedItem);
    setPrint(updatedItem);
  };

  return (
    <div>
      <form>
        <input type="text" value={data.skil} name="skil" onChange={onChange} />
        <input
          type="text"
          value={data.skilExp}
          name="skilExp"
          onChange={onChange}
        />
        <input type="button" onClick={onSubmit} value={"Add"} />
      </form>
      {print.map((item, i) => {
        return (
          <ul key={item.id} type="none">
            <li>
              {item?.data.skil} - {item?.data.skilExp}
              <span
                onClick={(e) => Trash(item.id)}
                style={{ color: "red", cursor: "pointer" }}
              >
                trash
              </span>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Todo;
