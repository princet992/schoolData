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
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default ProtectedRoute;
