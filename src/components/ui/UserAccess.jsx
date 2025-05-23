import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

const UserAccess = () => {
  const { theme } = useSelector((state) => state.Themes);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`grid place-items-center min-h-[calc(100vh-62px)] ${
          theme === "dark" && "bg-[#191a19]"
        }`}
      >
        <img
          src="error.gif"
          alt="access-denied"
          className="w-[80vw] mx-auto rounded-xl"
        />

        <Button
          variant="contained"
          color="success"
          sx={{ fontSize: "10px" }}
          onClick={() => navigate("/studentForm", { replace: true })}
        >
          Go Back
        </Button>
      </div>
    </>
  );
};

export default UserAccess;
