import React, {useContext, useState} from "react";

//Navbar css
import "./NavBar.scss";

// CART ICON FROM REACT ICONS
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

//Antdesign Icons
import {MenuOutlined } from '@ant-design/icons'

//Drawer 
import { Drawer } from "antd";

// ProductContext from ContextProvider
import { ProductContext } from "../../Context/ContextProvider";



const NavBar = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

  return (
    <>
      <nav className="ps-3">
        <div className="nav-icon">Snap-Store</div>
        <div className="web-nav">
        <NavBarLinks />
        </div>
        
        <div className="nav-menu-icon">
        <MenuOutlined onClick={handleDrawerOpen} />
        </div>

        <Drawer 
        placement='right'
        width={300}
        open={open}
        onClose={handleDrawerClose}
        >
        <div className="mob-nav">
         <NavBarLinks handleDrawerClose={handleDrawerClose} />  
         </div>
        </Drawer>
      </nav>
    </>
  );
};

export default NavBar;


const NavBarLinks = ({handleDrawerClose}) => { 
  const {cartItems} = useContext(ProductContext);
  
    
  return (
    <>
    <ul className="nav-links">
      <NavLink to={"/"} onClick={handleDrawerClose}>Home</NavLink>
      <NavLink to={"/about"} onClick={handleDrawerClose}>About</NavLink>
      <NavLink to={"/product"} onClick={handleDrawerClose}>Product</NavLink>
      <NavLink to={"/Description"} onClick={handleDrawerClose}>Description</NavLink>
      <NavLink to={"/contact"} onClick={handleDrawerClose}>Contact Us</NavLink>
      <NavLink to={"/cart"} onClick={handleDrawerClose}>
        <FaShoppingCart className="add-cart-icon" />
          <div className="cart-items-state">{cartItems.length}</div>
      </NavLink>
        
      </ul>
    </>
  );
};
