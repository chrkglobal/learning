export default function Orders() {
  const orders = [
    { id: 101, customer: "John Doe", amount: "$250", status: "Completed" },
    { id: 102, customer: "Jane Smith", amount: "$120", status: "Pending" },
    { id: 103, customer: "Mike Johnson", amount: "$75", status: "Cancelled" }
  ];

  return (
    <div>
      <h1>🛒 Orders</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#f5f6fa" }}>
            <th style={thStyle}>Order ID</th>
            <th style={thStyle}>Customer</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td style={tdStyle}>{o.id}</td>
              <td style={tdStyle}>{o.customer}</td>
              <td style={tdStyle}>{o.amount}</td>
              <td style={tdStyle}>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const thStyle = { padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" };
const tdStyle = { padding: "10px", borderBottom: "1px solid #eee" };
