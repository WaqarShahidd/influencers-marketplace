import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
