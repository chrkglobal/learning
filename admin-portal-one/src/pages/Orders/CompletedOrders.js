import { useEffect, useState } from "react";

export default function CompletedOrders() {
  const [orders, setOrders] = useState([]);

  // 🔹 Example static data (replace with API later)
  useEffect(() => {
    const sampleOrders = [
      {
        id: 1,
        customer: "Emma Wilson",
        product: "Laptop",
        amount: 999.99,
        status: "Completed",
        date: "2025-08-18",
      },
      {
        id: 2,
        customer: "Liam Brown",
        product: "Tablet",
        amount: 299.99,
        status: "Pending",
        date: "2025-08-20",
      },
      {
        id: 3,
        customer: "Olivia Davis",
        product: "Smartwatch",
        amount: 199.99,
        status: "Completed",
        date: "2025-08-15",
      },
    ];

    // ✅ Filter only Completed orders
    setOrders(sampleOrders.filter((o) => o.status === "Completed"));
  }, []);

  return (
    <div className="container mt-4">
      <h1>✅ Completed Orders</h1>

      {orders.length === 0 ? (
        <p className="text-muted mt-3">No completed orders yet.</p>
      ) : (
        <table className="table table-bordered table-striped mt-3">
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Date</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
