
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  // const [changeView, setChangeView] = useState();
  const [viewcomp, setViewcomp] = useState("Home");
  const [viewproduct, setViewproduct] = useState();
  const [activeComp, setActiveComp]= useState();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

   function  updateView(compLabel){
    console.log(compLabel);
    setViewcomp(compLabel);
   }

  function changeView(viewcom, currproduct) {
    setViewcomp(viewcom);
    setViewproduct(currproduct);
    console.log("Changing View ::" , viewcom)
  }

  function home(){

  }

  return (
    <div className="App">
      <Header updateView={updateView} />
      <div className='product-container'>
        {viewcomp === "Home" && <ProductCard products={products} changeView={changeView} />}
        {viewcomp === "details" && <ProductDetails product={viewproduct} changeView={changeView} />}
        {viewcomp === "cart" && <Cart product={viewproduct} changeView={changeView} />}
        
         
      </div>
    </div>
  );
}

export default App;
