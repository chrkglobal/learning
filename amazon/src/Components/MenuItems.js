import React, { useState } from 'react';
import { TopHeader } from './data';

function MenuItems(props) {
  const { product } = props; // Destructure the 'user' prop
  const [Header, setHeader] = useState(TopHeader);
  const [links, setLinks] = useState();


      
  return (
    <div className='menu-bar'>
      <ul className='top-menu'>

        {Header.links.map((link, j) => (
          <>
            <li className='line'><a href={link.url} target='_blank'>{link.link1}</a> </li>
            {/* <li className='line'>{link.link2} </li>  */}
          </>
        ))}

      </ul>
    </div>
  );
}

export default MenuItems;