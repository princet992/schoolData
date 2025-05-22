import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/AuthSlice/AuthSlice";
import PersonIcon from '@mui/icons-material/Person';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useSelector((state) => state.Themes);
  const { userLogin, isAuthenticate } = useSelector((state) => state.Auth);
  const [alert, setalert] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    setalert(false);
  };

  const formSubmit = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (isAuthenticate) {
      if (userLogin.role === "admin") {
        navigate("/home");
      } else {
        navigate("/studentForm");
      }
    }
  }, [isAuthenticate, userLogin]);

  return (
    <>
      <div
        className={`grid place-items-center h-[calc(100vh-56px)] p-1 ${
          theme === "dark" && "bg-[#191a19]"
        }`}
      >
        <Snackbar
          open={alert}
          autoHideDuration={1500}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert variant="filled" severity="error" onClick={handleClose}>
            Invalid email password
          </Alert>
        </Snackbar>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className={`max-w-[400px] p-3 rounded-lg  ${
            theme === "dark" ? "bg-[#000] text-white" : "bg-[#E6EBF1]"
          }`}
        >
          <h2 className="text-center text-xl font-semibold">Login Form</h2>
          <div className="my-2 grid">
            <label className="text-sm font-semibold">Email</label>
           <span className="flex items-center gap-2">
            {/* <PersonIcon /> */}
           <input
              type="text"
              {...register("email", {
                required: "Please enter email address",
              })}
              className={`px-3 py-2 rounded-lg ${
                theme === "light" ? "bg-[#fff]" : "bg-[#3b3737] "
              } my-2  outline-[#a6dda6] w-full`}
            />
           </span>
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
          <button
            className={`px-3 py-2 rounded-lg w-full  text-white ${
              theme === "light" ? "bg-[#2db611]" : "bg-[#134718]"
            }`}
          >
            Login
          </button>
          <p className="text-sm my-2">
            Dont't have an account{" "}
            <span
              className="text-[#1316e9] font-semibold"
              onClick={() => navigate("/signUp")}
            >
              Click here
            </span>{" "}
            for signUp
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
