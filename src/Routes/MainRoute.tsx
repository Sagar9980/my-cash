import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundView from "Views/NotFound/NotFoundView";
import RouteGuard from "./RouteGuard";
import PrivateRoutes from "./PrivateRoutes";
import AuthRoute from "./AuthRoute";

function MainRoute() {
  return (
    <Router>
      <Routes>
        <Route element={<RouteGuard />}>
          <Route path="/*" element={<PrivateRoutes />} />
        </Route>
        <Route path="/auth/*" element={<AuthRoute />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Router>
  );
}

export default MainRoute;
