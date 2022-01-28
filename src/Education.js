import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Education() {
  const [getAllData, setGetAllData] = useState([]);
  console.log(getAllData);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setGetAllData([...getAllData, data]);
    console.log(data);
  };
  return (
    <div className="container">
      <h4 className="mt-4">Education</h4> {/* Education */}
      <div className="row bg-light">
        <div className="row bg-light mb-3 ">
          <div className="col-md-6  ">
            <label htmlFor="firstname " className="form-label">
              College/University
            </label>
            <input
              {...register("education.college")}
              id={"college"}
              type="text"
              placeholder="college"
              className="form-control "
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Degree
            </label>
            <select
              {...register("education.degree")}
              id="inputState"
              className="form-select "
            >
              <option value="1">Bachelor's</option>
              <option value="2">Masters</option>
              <option value="3">Diploma etc</option>
            </select>
          </div>
          <div className="col-md-6  ">
            <label htmlFor="firstname " className="form-label">
              Other Degree
            </label>
            <input
              {...register("education.otherdegree")}
              id={"degree"}
              type="text"
              placeholder="other degree"
              className="form-control "
            />
          </div>{" "}
          <div className="col-md-6  ">
            <label htmlFor="firstname " className="form-label">
              course
            </label>
            <input
              {...register("education.course")}
              id={"degree"}
              type="text"
              placeholder="course"
              className="form-control "
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputEmail4" className="form-label">
              from
            </label>
            <input
              {...register("education.from")}
              type="date"
              placeholder="01/01/2022"
              className="form-control "
              id="inputEmail4"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputEmail4" className="form-label">
              to
            </label>
            <input
              {...register("education.to")}
              type="date"
              placeholder="01/01/2022"
              className="form-control "
              id="inputEmail4"
            />
          </div>
          <div className="form-check col-md-4 mt-5   ">
            <input
              className="form-check-input"
              type="checkbox"
              {...register("education.atpresent")}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              At Present
            </label>
          </div>
          <div className="col-md-6  ">
            <label htmlFor="firstname " className="form-label">
              Percentage %
            </label>
            <input
              {...register("education.pct")}
              id={"degree"}
              type="number"
              placeholder="%"
              className="form-control "
            />
          </div>
          <div className="col-md-6  ">
            <label htmlFor="firstname " className="form-label">
              CGPA %
            </label>
            <input
              {...register("education.cgpa")}
              id={"degree"}
              type="number"
              placeholder=" %"
              className="form-control "
            />
          </div>
        </div>

        <div className="col-md-12 mt-5">
          <button
            type="button"
            className="btn float-end  btn-outline-secondary "
          >
            <i
              onClick={handleSubmit(onSubmit)}
              className="fa fa-plus"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
      {getAllData.map((item, i) => (
        <ul key={i}>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
}

export default Education;
