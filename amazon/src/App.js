
import { useState, useEffect } from 'react';
import './App.css';


import Product from './Components/Product';
import MenuTop from './Components/Menu-top';
import MenuItems from './Components/MenuItems';
import SideMenu from './Components/SideMenu';

import { TopHeader } from './Components/data';

function App() {
 const [links, setLinks] = useState(TopHeader);
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then(res => res.json())
  //     .then(dataone => setProducts(dataone));
  //     console.log(dataone);
  // }, []);


  return (
    <div className="App">
      <div className=''>
        <MenuTop />
      </div>
      <div className=''>
        <MenuItems />
      </div>
      <div>
        <SideMenu />
      </div>
      <div className='body-container'>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
