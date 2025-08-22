export default function AddProduct() {
  return (
    <div className="container mt-4">
      <h1>➕ Add Product</h1>
      <form className="border p-4 rounded shadow-sm bg-light">
        
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Enter product price"
          />
        </div>

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}
