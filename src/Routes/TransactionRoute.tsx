import { Routes, Route } from "react-router-dom";
import TransactionList from "../Views/TransactionView/TransactionList";

function TransactionRoute() {
  return (
    <Routes>
      <Route path="/" element={<TransactionList />} />
    </Routes>
  );
}
export default TransactionRoute;
