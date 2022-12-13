import { Outlet, Navigate } from "react-router";
// import Cookies from "js-cookie";

const RouteGuard = () => {
  const auth = localStorage.getItem("user");
  return auth ? <Outlet /> : <Navigate to="auth/login" />;
};

export default RouteGuard;
