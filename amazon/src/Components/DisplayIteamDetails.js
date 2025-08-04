import React, { useState } from 'react';
import { TopHeader } from './data';

function DisplayIteamDetails(props) {
    const { product } = props; // Destructure the 'user' prop
    const [Header, setHeader] = useState(TopHeader);
    const [links, setLinks] = useState();



    return (
        <div className='Iteam-details-desplay'>
            <div className='Iteam-details-container'>
                <div className='Iteam-image-container'>
                    <div className='Iteam-main-image'>
                    <img src='https://m.media-amazon.com/images/I/61OdD9j53AL._SX679_.jpg' />
                    </div>
                    <ol className='iteam-image'>
                        <li className='Iteam-image-list'><img src='https://m.media-amazon.com/images/I/31Rc1LxFlUL._SX38_SY50_CR,0,0,38,50_.jpg' /></li>
                       <li className='Iteam-image-list'><img src='https://m.media-amazon.com/images/I/414xwOqlquL._SX38_SY50_CR,0,0,38,50_.jpg' /></li>
                        <li className='Iteam-image-list'><img src='https://m.media-amazon.com/images/I/31BrSewXt8L._SX38_SY50_CR,0,0,38,50_.jpg' /></li>
                        <li className='Iteam-image-list'><img src='https://m.media-amazon.com/images/I/41nVeISzA8S._SX38_SY50_CR,0,0,38,50_.jpg' /></li>
                        
                    </ol>
                    
                </div>
                <div className='Iteam-Store-details'>
                    sdfgsdfg-2
                </div>
                <div className='Iteam-delivery-details'>
                    {/* <h2>Price - <b>{product.price}</b></h2> */}
                    <span class="a-offscreen">₹19,995.00</span>
                    <p className='pera'>FREE delivery Friday, 8 August. <a href='' className='link'>Details</a></p>
                    <p className='pera'>Or fastest delivery Tomorrow, 5 August. Order within 10 hrs 2 mins.  <a href='' className='link'>Details</a></p>
                    <p className='pera'>Delivering to Hyderabad 500050 - Update location</p>
                    In stock
                    <p className='pera'>Ships from
                        Amazon
                        Sold by
                        VRP Telematics
                        Payment
                        Secure transaction</p>
                    <p><b>Add a Protection Plan:</b><br />
                       <input type='checkbox' /> 1 Year Extended Warranty for ₹1,265.00</p>
                       <select className='selectbox'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                       </select>
                       <button className='cart-button'>Add to Cart</button>
                       <button className='buy-button'>Buy Now</button>
                       <p className='pera'><input type='checkbox' />Add gift options</p>
                </div>
            </div>
        </div>
    );
}

export default DisplayIteamDetails;