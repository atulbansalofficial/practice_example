import React, { useEffect } from "react";
const axios = require("axios");

function TableInput() {
  axios
    .get(
      "http://ec2-3-109-108-73.ap-south-1.compute.amazonaws.com/api/v1/employer/job?luid=61f23762a6b6f90afa49cd4c"
    )
    .then(function (response) {
      // handle success
      console.log(response.data.map((item)=>{
        console.log();
        
      }));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableInput;
