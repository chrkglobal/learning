import { useEffect, useState } from "react";

export default function PendingOrders() {
  const [orders, setOrders] = useState([]);

  // 🔹 Example static data (replace with API later)
  useEffect(() => {
    const sampleOrders = [
      {
        id: 1,
        customer: "Jane Smith",
        product: "Smartphone",
        amount: 599.99,
        status: "Pending",
        date: "2025-08-21",
      },
      {
        id: 2,
        customer: "Michael Lee",
        product: "Headphones",
        amount: 199.99,
        status: "Shipped",
        date: "2025-08-19",
      },
      {
        id: 3,
        customer: "Sarah Johnson",
        product: "Camera",
        amount: 299.5,
        status: "Pending",
        date: "2025-08-20",
      },
    ];

    // ✅ Filter only Pending orders
    setOrders(sampleOrders.filter((o) => o.status === "Pending"));
  }, []);

  return (
    <div className="container mt-4">
      <h1>⏳ Pending Orders</h1>

      {orders.length === 0 ? (
        <p className="text-muted mt-3">No pending orders right now ✅</p>
      ) : (
        <table className="table table-bordered table-striped mt-3">
          <thead className="table-warning">
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
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
                <td>{order.date}</td>
                <td>
                  <button className="btn btn-sm btn-success me-2">
                    Approve
                  </button>
                  <button className="btn btn-sm btn-danger">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
