import AdminContainer from "Container/AdminContainer";
import { Routes, Route } from "react-router-dom";
import DashboardView from "Views/Dashboard/DashboardView";
import TransactionRoute from "./TransactionRoute";

function PrivateRoutes() {
  return (
    <AdminContainer>
      <Routes>
        <Route path="/" element={<DashboardView />} />
        <Route path="/transactions" element={<TransactionRoute />} />
      </Routes>
    </AdminContainer>
  );
}

export default PrivateRoutes;
