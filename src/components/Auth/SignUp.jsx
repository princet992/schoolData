import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { addUser } from "../../features/AuthSlice/AuthSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useSelector((state) => state.Themes);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    dispatch(addUser(newUser));
    navigate("/");
  };

  return (
    <div
      className={`grid place-items-center h-[calc(100vh-56px)] p-1 ${
        theme === "dark" && "bg-[#191a19]"
      }`}
    >
      <form
        onSubmit={handleSubmit(formSubmit)}
        className={`max-w-[400px] p-3 rounded-lg  ${
          theme === "dark" ? "bg-[#000] text-white" : "bg-[#E6EBF1]"
        }`}
      >
        <h2 className="text-center text-xl font-semibold">SignUp Form</h2>
        <div className="my-2 grid">
          <label className="text-sm font-semibold">UserName</label>
          <input
            type="text"
            {...register("name", {
              required: "Please enter user name",
            })}
            className={`px-3 py-2 rounded-lg ${
              theme === "light" ? "bg-[#fff]" : "bg-[#3b3737] "
            } my-2  outline-[#a6dda6] w-full`}
          />

          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="my-2 grid">
          <label className="text-sm font-semibold">Email</label>
          <input
            type="text"
            {...register("email", {
              required: "Please enter email address",
            })}
            className={`px-3 py-2 rounded-lg ${
              theme === "light" ? "bg-[#fff]" : "bg-[#3b3737] "
            } my-2  outline-[#a6dda6] w-full`}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="my-2 grid">
          <label className="text-sm font-semibold">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Please enter password",
            })}
            className={`px-3 py-2 rounded-lg ${
              theme === "light" ? "bg-[#fff]" : "bg-[#3b3737] "
            } my-2  outline-[#a6dda6] w-full`}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div
          className={`px-3 py-2 rounded-lg ${
            theme === "light" ? "bg-[#fff]" : "bg-[#3b3737] "
          } my-2  outline-[#a6dda6] w-full`}
        >
          <label className="text-sm font-semibold">Role</label>
          <select
            {...register("role", {
              required: "Please enter role type",
            })}
            className="px-3 py-2 rounded-lg bg-[#fff] outline-0 my-2"
          >
            <option value="admin">admin</option>
            <option value="student">student</option>
          </select>
          {errors.role && <p>{errors.role.message}</p>}
        </div>
        <button
          className={`px-3 py-2 rounded-lg w-full  text-white ${
            theme === "light" ? "bg-[#2db611]" : "bg-[#134718]"
          }`}
        >
          Register
        </button>
        <p className="text-sm my-2">
          Already have an account{" "}
          <span
            className="text-[#1316e9] font-semibold"
            onClick={() => navigate("/")}
          >
            Click here
          </span>{" "}
          to login
        </p>
      </form>
    </div>
  );
};

export default SignUp;
