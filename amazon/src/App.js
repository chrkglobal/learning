
import { useState, useEffect } from 'react';
import './App.css';


import Product from './Components/Product';
import MenuTop from './Components/Menu-top';
import MenuItems from './Components/MenuItems';
import SideMenu from './Components/SideMenu';

import { TopHeader } from './Components/data';
import DisplayIteamDetails from './Components/DisplayIteamDetails';

function App() {
  const [count, setCount] = useState(0);
  const [links, setLinks] = useState(TopHeader);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  function cartItems(iteam) {
    setCount(count + 1)
    console.log(iteam)
  }

  return (
    <div className="App">
      <div className='top-menu-container'>
        <MenuTop />
        <MenuItems />
        <div className='cart-total'>Selected Iteams {count}<span><a href=''> View Cart</a></span></div>
        
      </div>
      <div className=''>


      </div>

      <div className='body-container'>
        <div className='body-container-left'>
          <SideMenu />
        </div>
        <div className='body-container-right'>
          {/* {products.map((product) => (
            <Product product={product}
              cartItems={cartItems}
            />
          ))} */}

          <DisplayIteamDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
