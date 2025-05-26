import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../../features/schoolSlice/schoolSlice";
import { schools } from "../../api/schoolApi";

const StudentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { schoolData } = useSelector((state) => state.school);
  const { theme } = useSelector((state) => state.Themes);

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
    navigate("/formSuccess", { state: newData, replace: true });
  };

  return (
    <>
      <div
        className={`grid place-items-center min-h-[calc(100vh-56px)] p-1 py-10 ${
          theme === "dark" && "bg-[#000]"
        }`}
      >
        <form
          onSubmit={handleSubmit(formSubmit)}
          className={`md:w-[400px] p-3 rounded-lg  ${
            theme === "light" ? "bg-[#E6EBF1]" : "bg-[#1a1616] text-[#fff]"
          }`}
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
              className={`px-3 py-2 rounded-lg ${
                theme === "light" ? "bg-[#fff]" : "bg-[#3b3737] "
              } my-2  outline-[#a6dda6] w-full`}
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
              className={`px-3 py-2 rounded-lg ${
                theme === "light" ? "bg-[#fff]" : "bg-[#3b3737] "
              } my-2  outline-[#a6dda6] w-full`}
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
              className={`px-3 py-2 rounded-lg ${
                theme === "light" ? "bg-[#fff]" : "bg-[#3b3737] "
              } my-2  outline-[#a6dda6] w-full`}
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
              className={`px-3 py-2 rounded-lg ${
                theme === "light" ? "bg-[#fff]" : "bg-[#3b3737] "
              } my-2  outline-[#a6dda6] w-full`}
            />
            {errors.phone && (
              <p className="text-xs text-[#f71717]">{errors.phone.message}</p>
            )}
          </div>

          <div className="my-2 grid">
            <label className="text-sm font-semibold">Select School*</label>
            <select
              className={`px-3 py-2 rounded-lg ${
                theme === "light" ? "bg-[#fff]" : "bg-[#3b3737] "
              } my-2  outline-[#a6dda6] w-full`}
              {...register("school", {
                required: "Please enter school name",
              })}
            >
              {schools?.map((school) => (
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

          <button
            className={`px-3 py-2 rounded-lg w-full  text-white ${
              theme === "light" ? "bg-[#2db611]" : "bg-[#134718]"
            }`}
          >
            Add School
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentForm;
