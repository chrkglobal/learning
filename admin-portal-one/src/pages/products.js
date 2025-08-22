export default function Products() {
  const products = [
    { id: 1, name: "Laptop", price: "$999", stock: 20 },
    { id: 2, name: "Smartphone", price: "$499", stock: 50 },
    { id: 3, name: "Headphones", price: "$99", stock: 100 }
  ];

  return (
    <div>
      <h1>📦 Products</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#f5f6fa" }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td style={tdStyle}>{p.id}</td>
              <td style={tdStyle}>{p.name}</td>
              <td style={tdStyle}>{p.price}</td>
              <td style={tdStyle}>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const thStyle = { padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" };
const tdStyle = { padding: "10px", borderBottom: "1px solid #eee" };
