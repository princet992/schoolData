import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }) => {
  const { isAuthenticate, userLogin } = useSelector((state) => state.Auth);

  const admin = role ? role.includes(userLogin?.role) : [];

  const user = isAuthenticate && !admin;

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
