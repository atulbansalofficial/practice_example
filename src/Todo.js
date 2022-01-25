import React, { useState } from "react";

function Todo() {
  const [data, setData] = useState({
    skil: "",
    skilExp: "",
  });
  const [print, setPrint] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data.skil, data.skilExp);
    setPrint(true);
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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={data.skil} name="skil" onChange={onChange} />
        <input
          type="text"
          value={data.skilExp}
          name="skilExp"
          onChange={onChange}
        />
        <input type="submit" value={"Add"} />
      </form>

      {print ? (
        <div>
          <h3>
            {data.skil} {data.skilExp}
          </h3>
        </div>
      ) : null}
    </div>
  );
}

export default Todo;
