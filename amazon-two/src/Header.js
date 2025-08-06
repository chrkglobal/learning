import React, { useState } from 'react';
import { topMenu } from './Menu';


export default function Header(props, updateView) {

  const [topmenu, setTopMenu] = useState(topMenu);
  function showComp(compLabel){
    console.log("compLabel ::",compLabel);
    props.updateView(compLabel);
  } 
  return (
    <header>
      <div id="top-header">
        <div id="logo">
          <img src={topMenu.logo.url} />
        </div>
        <nav>
          {/*  */}
          <ul>
            {topMenu.menuItems.map((menu, ind) =>
              <li key={menu.ind} className="active">
                <a href="#" onClick={()=> showComp(menu.label)}>{menu.label}</a>
              </li>
            )}
            <li>Cart ({topMenu.length})</li>
          </ul>
        </nav>
      </div>

       
    </header>
  )
}
