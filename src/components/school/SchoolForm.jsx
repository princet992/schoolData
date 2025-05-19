import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSchools } from "../../features/schoolSlice/schoolSlice";
import { nanoid } from "@reduxjs/toolkit";

const SchoolForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div className="grid place-items-center h-[calc(100vh-56px)]">
      <form
        action=""
        onSubmit={handleSubmit(formSubmit)}
        className="max-w-[400px] p-3 rounded-lg bg-[#E6EBF1]"
      >
        <h2 className="text-center text-xl font-semibold">Add School</h2>
        <div className="my-2 grid">
          <label className="text-sm font-semibold">School Name</label>
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
          <label className="text-sm font-semibold">School Address</label>
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
          <label className="text-sm font-semibold">School Image</label>
          <input
            type="file"
            {...register("photo", {
              required: "Please enter school photo",
            })}
            className="px-3 py-2 rounded-lg bg-[#fff] outline-0 my-2"
          />
          {errors.photo && <p>{errors.photo.message}</p>}
        </div>
        <button className="px-3 py-2 rounded-lg w-full bg-[#31d511] text-white">
          Add School
        </button>
      </form>
    </div>
  );
};

export default SchoolForm;
