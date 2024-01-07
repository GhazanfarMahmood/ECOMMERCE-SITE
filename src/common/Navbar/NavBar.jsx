import React, {useState} from "react";

//Navbar css
import "./NavBar.scss";

// CART ICON FROM REACT ICONS
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

//Antdesign Icons
import {MenuOutlined } from '@ant-design/icons'

//Drawer 
import { Drawer } from "antd";



const NavBarLinks = () => { 
    
  return (
    <>
    <ul className="nav-links">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/product"}>Product</NavLink>
      <NavLink to={"/contact"}>Contact Us</NavLink>
      <NavLink to={"/cart"}>
        <FaShoppingCart className="add-cart-icon" />
      </NavLink>
      </ul>
    </>
  );
};

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
         <NavBarLinks />  
         </div>
        </Drawer>
      </nav>
    </>
  );
};

export default NavBar;
