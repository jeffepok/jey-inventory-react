import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  if (isAuthenticated){

    return <Outlet/>;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute;