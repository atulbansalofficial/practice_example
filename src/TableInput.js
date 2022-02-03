import React, { useState, useEffect } from "react";
const axios = require("axios");

function TableInput() {
  const [jobTital, setjobTital] = useState([]);
  console.log(jobTital);

  axios
    .get(
      "http://ec2-3-109-108-73.ap-south-1.compute.amazonaws.com/api/v1/employer/job?luid=61f23762a6b6f90afa49cd4c"
    )
    .then(function (response) {
      // handle success
      console.log(response.data[0]);
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
            <th scope="col">Job Title</th>
            <th scope="col">Published On</th>
            <th scope="col">Matching Candidates</th>
            <th scope="col">Candidates Applied(*)</th>
            <th scope="col">Skills+Rating</th>
            <th scope="col">Location</th>
            <th scope="col">Status</th>
            <th scope="col">Updated On</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
      {}
    </div>
  );
}

export default TableInput;
