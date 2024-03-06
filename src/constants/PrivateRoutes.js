import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  //   const { isAuthenticated } = useSelector((state) => state.log);
  //   return isAuthenticated ? <Outlet /> : <Navigate to={"/sign-in"} />;

  return <Outlet />;
};

export default PrivateRoute;
