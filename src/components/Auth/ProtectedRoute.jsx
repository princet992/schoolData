import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { logOut } from "../../features/AuthSlice/AuthSlice";

const ProtectedRoute = ({ role }) => {
  const dispatch = useDispatch();
  const { isAuthenticate, userLogin } = useSelector((state) => state.Auth);

  const admin = role ? role.includes(userLogin?.role) : [];

  const user = isAuthenticate && !admin;

  const handleLogOut = () => {
    dispatch(logOut());
  };

  if (!isAuthenticate) {
    return <Navigate to="/" />;
  }

  if (user) {
    return <Navigate to="/userAccess" />;
  }

  return (
    <>
      {/* {isAuthenticate && (
        <div className="flex  justify-end items-center flex-wrap px-10 py-5">
          <h2 className="m-3">
            Welcome , <span className="font-semibold">{userLogin?.name}</span>
          </h2>
          <Button
            sx={{ fontSize: "10px", fontWeight: "bold" }}
            variant="outlined"
            size="small"
            onClick={handleLogOut}
          >
            LogOut
          </Button>
        </div>
      )} */}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default ProtectedRoute;
