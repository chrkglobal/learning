
import { useState } from 'react';
import './App.css';
import { NetflixData } from "./Data1.js";

function App() {
  const [Netfl, setNetflix] = useState(NetflixData);
  console.log(Netfl.products);
  return (
    <div className="App">







      <table border="1" width="100%">

        {/* <thead> {Netfl.products.length > 0 && Object.keys(Netfl.products[0]).map((header, i) => (<th>{header}</th>))}</thead> */}
        <tbody>
          {/* <tr><td>{Netfl.application.name}</td></tr> */}
          {Netfl.products.map((Net, i) => (

            <div className='div-container'>
              <div className='img-container'>
                <img src={Net.thumbnail} className='image-class' />
              </div>
              <div className='content-container'>
                ID : {Net.id} - Price : {Net.price}<br />
                {Net.category}<br />
                {Net.title}<br />
                {Net.description}<br />
                Percentage : {Net.discountPercentage} - Rating : {Net.rating}
              </div>
            </div>

            // <tr key={Net.id}>
            //   <td style={{width:'5%'}}>{Net.id}</td>
            //   <td style={{width:'5%'}}>{Net.title}</td>
            //   <td style={{width:'5%'}} className='description'>{Net.description}</td>
            //   <td>{Net.category}</td>
            //   <td>{Net.price}</td>
            //   <td>{Net.discountPercentage}</td>
            //   <td>{Net.rating}</td>
            //   <td>{Net.stock}</td>
            //   <td>{Net.tags}</td>
            //   <td>{Net.brand}</td>
            //   <td>{Net.sku}</td>
            //   <td>{Net.weight}</td>
            //   <td>{Net.dimensions.depth}</td>
            //   <td>{Net.warrantyInformation}</td>
            //   <td>{Net.shippingInformation}</td>
            //   <td>{Net.availabilityStatus}</td>
            //   <td>{Net.reviews.comment}</td>
            //   <td>{Net.returnPolicy}</td>
            //   <td>{Net.minimumOrderQuantity}</td>
            //   <td>{Net.meta.createdAt}</td>
            //   <td><img src={Net.images} className='image-class' /></td>
            //   <td><img src={Net.thumbnail} className='image-class' /></td>
            // </tr>
          ))}

        </tbody>
      </table>

    </div>
  );
}

export default App;
