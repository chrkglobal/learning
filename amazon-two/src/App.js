
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  // const [changeView, setChangeView] = useState();
  const [viewcomp, setViewcomp] = useState("productcard");
  const [viewproduct, setViewproduct] = useState();
  const [activeComp, setActiveComp]= useState();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

   function  updateView(compLabel){
    console.log(compLabel);
    setActiveComp(compLabel);
   }

  function changeView(viewcom, currproduct) {
    setViewcomp(viewcom);
    setViewproduct(currproduct);
    console.log("Changing View ::" , viewcom)
  }

  return (
    <div className="App">
      <Header updateView={updateView} />
      <div className='product-container'>
        {viewcomp === "productcard" && <ProductCard products={products} changeView={changeView} />}
        {viewcomp === "details" && <ProductDetails product={viewproduct} />}
        {viewcomp === "cart" && <Cart product={viewproduct} />}
        
         
      </div>
    </div>
  );
}

export default App;
