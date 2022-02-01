import React from "react";

function TableInput() {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Skill</th>
            <th scope="col">Experience (years)</th>
            <th scope="col" className="float-end">
              ADD/Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" placeholder="Java" />
            </td>
            <td>
              <input type="text" placeholder="2" />
            </td>
            <td>
              <button
                type="button"
                value={"Add"}
                className="btn float-end  btn-outline-secondary "
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableInput;
