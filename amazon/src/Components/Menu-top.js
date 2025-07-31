import React, { useState } from 'react';
import { TopHeader } from './data';

function MenuTop(props) {

  const [Header, setHeader] = useState(TopHeader);
  const [links, setLinks] = useState();
  console.log(TopHeader);
  return (
    <div className='menu-bar'>
      <ul className='top-menu'>
        <span><img src={Header.logo.logoUrl} className='logo' /></span>
        <span className='logo-right-location-box'>
          <small>Delivering to Hyderabad 500028</small>
          <br />
          <small>Update location</small>
        </span>
        <div className='nav-fill'>
          <input type='text' className='nav-input' />
        </div>
        {Header.links.map((link, j) => (
          <> 
          {/* <li className='line'>{link.link1} </li> */}
          {/* <li className='line'>{link.link2} </li>  */}
          </>
        ))}

      </ul>

    </div>
  );
}

export default MenuTop;