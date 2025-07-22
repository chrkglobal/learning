import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
       .then(products => setProducts(products.products));
    console.log(products);

  }, []);

  function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


 const deleteItem = (id) => {
    setProducts(products.filter((t) => t.id !== id));
    
  };



  return (
    <div className="App">
        {products.map((product, index) => (
          <div className='post-item' key={product.id} style={{backgroundColor: getRandomColor(), 
        backgroundColor: index % 2 === 0 ? '#f0f8ff' : '#ffe4e1', // Light Blue / Light Pink
        padding: '10px',
        borderRadius: '8px'
      }}>
        <div className='delete-icon' style={{backgroundColor: getRandomColor(), 
        backgroundColor: index % 2 === 0 ? '#f0f00f' : '#ff00e1'}} onClick={() => deleteItem(product.id)} title='Delete'>X</div>
            <p>{product.title} - {product.id}</p>
            <img src={product.thumbnail}  alt={product.title} />
            <p>Price : Rs /- {product.price}</p>
          </div>
        ))}
      
    </div>
  );
}

export default App;
