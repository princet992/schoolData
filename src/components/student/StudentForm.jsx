import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../../features/schoolSlice/schoolSlice";
import { Alert, Snackbar } from "@mui/material";

const StudentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { schoolData } = useSelector((state) => state.school);
  const [alert, setalert] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const newData = {
      ...data,
      id: nanoid(),
      request: "pending",
    };
    dispatch(addStudent(newData));
    // navigate("/home");
    setalert(true)
    reset()
  };

  const handleClose = () =>{
     setalert(false)
  }
  return (
    <div className="grid place-items-center h-[calc(100vh-64px)]">
       <Snackbar
              open={alert}
              autoHideDuration={2000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "center", margin: " 30px 0px" }}
            >
              <Alert variant="filled" severity='success' onClick={handleClose}>
                Student added successfully
              </Alert>
            </Snackbar>
      <form
        action=""
        onSubmit={handleSubmit(formSubmit)}
        className="w-[400px] p-3 rounded-lg bg-[#E6EBF1]"
      >
        <h2 className="text-center text-xl font-semibold">Add School</h2>
        <div className="my-2 grid">
          <label className="text-sm font-semibold">Student Name</label>
          <input
            type="text"
            {...register("name", {
              required: "Please enter school name",
            })}
            className="px-3 py-2 rounded-lg bg-[#fff] outline-0 my-2"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="my-2 grid">
          <label className="text-sm font-semibold">Student Address</label>
          <input
            type="text"
            {...register("address", {
              required: "Please enter school address",
            })}
            className="px-3 py-2 rounded-lg bg-[#fff] outline-0 my-2"
          />
          {errors.address && <p>{errors.address.message}</p>}
        </div>
        <div className="my-2 grid">
          <label className="text-sm font-semibold">Class Name</label>
          <input
            type="text"
            {...register("class", {
              required: "Please enter class name",
            })}
            className="px-3 py-2 rounded-lg bg-[#fff] outline-0 my-2"
          />
          {errors.class && <p>{errors.class.message}</p>}
        </div>
        <div className="my-2 grid">
          <label className="text-sm font-semibold">Phone Number</label>
          <input
            type="text"
            {...register("phone", {
              required: "Please enter phone number",
            })}
            className="px-3 py-2 rounded-lg bg-[#fff] outline-0 my-2"
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div className="my-2 grid">
          <label className="text-sm font-semibold">Select School</label>
          <select
            className="px-3 py-2 rounded-lg bg-[#fff] outline-0 my-2"
            {...register("school", {
              required: "Please enter school name",
            })}
          >
            {schoolData?.map((school) => (
              <option value={school.name} key={school.id}>
                {school.name}
              </option>
            ))}
          </select>
          {errors.school && <p>{errors.school.message}</p>}
        </div>
        <button className="px-3 py-2 rounded-lg w-full bg-[#31d511] text-white">
          Add School
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
