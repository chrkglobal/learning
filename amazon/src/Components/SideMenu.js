import React from 'react';

    function SideMenu(props) {
      const { product } = props; // Destructure the 'user' prop

      return (
       <div className='Left-Side-menu'>
            {/* <p className='product-id'>{product.id}</p>  */}
            Deals & Discounts
        </div>
      );
    }

    export default SideMenu;