import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const { theme } = useSelector((state) => state.Themes);
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-[calc(100vh-66px)] text-center ${
        theme === "dark" && "bg-[#191a19] text-[#fff]"
      }`}
    >
      <h2 className=" text-3xl font-semibold py-5">Not Found</h2>
      <p>The url you are are requesting is not available </p>
      <img
        src="https://www.vizion.com/wp-content/smush-webp/2018/09/shutterstock_479042983.jpg.webp"
        alt="404-page"
        className="max-w-[40vw] mx-auto rounded-lg my-3 border "
      />
      <Button
        variant="contained"
        sx={{ fontSize: "10px" }}
        onClick={() => navigate("/studentForm", { replace: true })}
      >
        Go Back
      </Button>
    </div>
  );
};

export default ErrorPage;
