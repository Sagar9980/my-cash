import { getToken } from "API/api";
import { Outlet, Navigate } from "react-router";


const RouteGuard = () => {
const token = getToken();
  return token ? <Outlet /> : <Navigate to="auth/login" />;
};

export default RouteGuard;
