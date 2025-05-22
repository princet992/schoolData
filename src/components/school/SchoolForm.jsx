import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSchools } from "../../features/schoolSlice/schoolSlice";
import { nanoid } from "@reduxjs/toolkit";


const SchoolForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useSelector((state) => state.Themes);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const convertImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  };

  const formSubmit = async (data) => {
    const photo = data.photo[0];
    const base64 = await convertImage(photo);
    const newData = {
      ...data,
      id: nanoid(),
      photo: base64,
    };
    dispatch(addSchools(newData));
    navigate("/");
  };
  return (
    <>
      <div
        className={`grid place-items-center h-[calc(100vh-56px)] p-1 py-10 ${
          theme === "dark" && "bg-[#191a19]"
        }`}
      >
        <form
          onSubmit={handleSubmit(formSubmit)}
          className={`max-w-[400px] p-3 rounded-lg  ${
            theme === "dark" ? "bg-[#000] text-white" : "bg-[#E6EBF1]"
          }`}
        >
          <h2 className="text-center text-xl font-semibold">Add School</h2>

          <div className="my-2 grid">
            <label className="text-sm font-semibold">School Name*</label>
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
              <p className="text-sm text-[#ee1b0c]">{errors.name.message}</p>
            )}
          </div>

          <div className="my-2 grid">
            <label className="text-sm font-semibold">School Address*</label>
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
              <p className="text-sm text-[#ee1b0c]">{errors.address.message}</p>
            )}
          </div>

          <div className="my-2 grid">
            <label className="text-sm font-semibold">School Image*</label>
            <input
              type="file"
              {...register("photo", {
                required: "Please enter school photo",
              })}
              className={`px-3 py-2 rounded-lg ${
                theme === "light" ? "bg-[#fff]" : "bg-[#3b3737] "
              } my-2  outline-[#a6dda6] w-full`}
            />
            {errors.photo && (
              <p className="text-sm text-[#ee1b0c]">{errors.photo.message}</p>
            )}
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

export default SchoolForm;
