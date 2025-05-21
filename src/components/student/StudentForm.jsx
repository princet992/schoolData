import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../../features/schoolSlice/schoolSlice";

const StudentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { schoolData } = useSelector((state) => state.school);

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
    reset();
    navigate("/formSuccess", { replace: true });
  };

  return (
    <>
      <div className="grid place-items-center h-[100vh] px-2">
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="max-w-[400px] p-3 rounded-lg bg-[#E6EBF1]"
        >
          <h2 className="text-center text-xl font-semibold py-5">
            Addmission Form
          </h2>

          <div className="my-2 grid">
            <label className="text-sm font-semibold">Student Name*</label>
            <input
              type="text"
              {...register("name", {
                required: "Please enter school name",
              })}
              className="px-3 py-2 rounded-lg bg-[#fff]  my-2  outline-[#a6dda6]"
            />
            {errors.name && (
              <p className="text-xs text-[#f71717]">{errors.name.message}</p>
            )}
          </div>

          <div className="my-2 grid">
            <label className="text-sm font-semibold">Student Address*</label>
            <input
              type="text"
              {...register("address", {
                required: "Please enter school address",
              })}
              className="px-3 py-2 rounded-lg bg-[#fff]  my-2 outline-[#a6dda6]"
            />
            {errors.address && (
              <p className="text-xs text-[#f71717]">{errors.address.message}</p>
            )}
          </div>

          <div className="my-2 grid">
            <label className="text-sm font-semibold">Class Name*</label>
            <input
              type="text"
              {...register("class", {
                required: "Please enter class name",
              })}
              className="px-3 py-2 rounded-lg bg-[#fff]  my-2 outline-[#a6dda6]"
            />
            {errors.class && (
              <p className="text-xs text-[#f71717]">{errors.class.message}</p>
            )}
          </div>

          <div className="my-2 grid">
            <label className="text-sm font-semibold">Phone Number*</label>
            <input
              type="text"
              {...register("phone", {
                required: "Please enter phone number",
              })}
              className="px-3 py-2 rounded-lg bg-[#fff]  my-2 outline-[#a6dda6]"
            />
            {errors.phone && (
              <p className="text-xs text-[#f71717]">{errors.phone.message}</p>
            )}
          </div>

          <div className="my-2 grid">
            <label className="text-sm font-semibold">Select School*</label>
            <select
              className="px-3 py-2 rounded-lg bg-[#fff]  my-2 outline-[#a6dda6]"
              {...register("school", {
                required: "Please enter school name",
              })}
            >
              {schoolData?.map((school) => (
                <option value={school.name} key={school.id}>
                  {school.name}
                </option>
              ))}
              {errors.school && (
                <p className="text-xs text-[#f71717]">
                  {errors.school.message}
                </p>
              )}
            </select>
          </div>

          <button className="px-3 py-2 rounded-lg w-full bg-[#31d511] text-white">
            Add School
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentForm;
