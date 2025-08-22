import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products/Products";
import AddProduct from "./pages/Products/AddProduct";
import Categories from "./pages/Products/Categories";
import Orders from "./pages/Orders/Orders";
import PendingOrders from "./pages/Orders/PendingOrders";
import CompletedOrders from "./pages/Orders/CompletedOrders";
import Reports from "./pages/Reports";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Header />
          <div className="page-content" style={{ padding: "20px" }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/add" element={<AddProduct />} />
              <Route path="/products/categories" element={<Categories />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/pending" element={<PendingOrders />} />
              <Route path="/orders/completed" element={<CompletedOrders />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
