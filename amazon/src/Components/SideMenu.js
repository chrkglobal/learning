import React, { useState } from 'react';
import { LeftMenu } from './Left-menu-data';
import './SideMenu.css';

function SideMenu(props) {
  const [sideMenuLinks, setsideMenuLinks] = useState(LeftMenu);

  const { product } = props; // Destructure the 'user' prop
  // console.log("sideMenuLinks",sideMenuLinks);

  return (
    <div className='Left-Side-menu-container'>
    <div className='Left-Side-menu'>
      <h3> Deals & Discounts </h3>
      <ul>
        {sideMenuLinks.links.map((leftMenuItems, j) => (
          <>
            <li key={leftMenuItems.j}><a href={leftMenuItems.url} className='vertical-menu'>{leftMenuItems.link1}</a></li>
          </>
        ))}

      </ul>
    </div>
    </div>
  );
}

export default SideMenu;