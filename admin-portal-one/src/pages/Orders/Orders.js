import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  // 🔹 Example static orders (replace with API later)
  useEffect(() => {
    const sampleOrders = [
      {
        id: 1,
        customer: "John Doe",
        product: "Backpack",
        amount: 109.95,
        status: "Shipped",
        date: "2025-08-20",
      },
      {
        id: 2,
        customer: "Jane Smith",
        product: "Smartphone",
        amount: 599.99,
        status: "Pending",
        date: "2025-08-21",
      },
      {
        id: 3,
        customer: "David Brown",
        product: "Shoes",
        amount: 89.5,
        status: "Delivered",
        date: "2025-08-19",
      },
    ];
    setOrders(sampleOrders);
  }, []);

  return (
    <div className="container mt-4">
      <h1>📑 All Orders</h1>

      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>${order.amount}</td>
              <td>
                <span
                  className={`badge ${
                    order.status === "Shipped"
                      ? "bg-info"
                      : order.status === "Pending"
                      ? "bg-warning text-dark"
                      : "bg-success"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td>{order.date}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2">View</button>
                <button className="btn btn-sm btn-danger">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
