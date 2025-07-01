
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [baseUrl, setbaseUrl] = useState('https://dummyjson.com/products/');
  const [products, setProducts] = useState([]);
  const [searchValue, setsearchValue] = useState()

   const [myproducts, setMyproducts] = useState([]);

  function LoadData(loadurl) {
    fetch(loadurl)
      .then(res => res.json())
      .then((data) => setProducts(data.products));  
  }

  function handleInputChange(e){
    setsearchValue(e.target.value);
    
  }

  function searchProduct(){
   LoadData(baseUrl + '/search?q=' + searchValue)
       
  }

  useEffect(() => {

    LoadData(baseUrl); 
    
  }, []);


return (
  
  <div className="App">
  
    Search: <input type='text' onChange={handleInputChange} />
    <input type='button' value="Search" onClick={searchProduct} />
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>category</th>
          <th>description</th>
          <th>discountPercentage</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => 
          <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.category}</td>
          <td>{product.description}</td>
          <td>{product.discountPercentage}</td>
        </tr>
        )}
        
      </tbody>
    </table>
  </div>
);
}

export default App;
