import { Routes, Route } from "react-router-dom";
import LoginView from "Views/Auth/LoginView";
import RegisterView from "Views/Auth/RegisterView";

export const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
    </Routes>
  );
};

export default AuthRoute;
