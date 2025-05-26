import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const FormSuccess = () => {
  const { theme } = useSelector((state) => state.Themes);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  return (
    <div
      className={`text-center min-h-screen ${
        theme === "dark" && "bg-[#191a19] text-white"
      }`}
    >
      {data ? (
        <div>
          <h2 className="text-center text-xl py-5">Form Success</h2>
          <h2 className="  font-semibold py-5">
            Congrats <span className="text-[#3668f1]">{data?.name}</span> , your
            application has been Submitted Successfully
          </h2>
          <Button
            variant="outlined"
            onClick={() => navigate("/studentForm", { replace: true })}
          >
            Go Back
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default FormSuccess;
