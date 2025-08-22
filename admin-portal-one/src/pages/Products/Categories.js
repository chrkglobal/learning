import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch categories from API
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div>
      <h1>📂 Product Categories</h1>
       <table class="table table-striped table-bordered table-hover">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Image/Icon</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{cat}</td>
              <td>{cat} products and related items</td>
              <td>
                <img
                  src={`https://via.placeholder.com/60?text=${cat}`}
                  alt={cat}
                  style={{ width: "60px", height: "60px", objectFit: "contain" }}
                />
              </td>
              <td>
                <button className='btn btn-primary'>Edit</button>
                <button  className='btn btn-secondary' style={{ marginLeft: "8px" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
