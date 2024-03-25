import React, { useContext, useState } from "react";

//Footer scss
import "./Footer.scss";

//NavLink imported from react-router-dom
import { NavLink } from "react-router-dom";


//Icons imported from react-icons
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

//Categories Button 
import CategoriesButton from "../CategoriesButton/CategoriesButton";

//ProductCategory function from CategoryContext file
import { ProductCategoryContext } from "../../Context/CategoryContext";

const Footer = () => {
  const {handleCategoryClick, selectedCategory} = useContext(ProductCategoryContext);
  

  return (
    <footer className="ps-3">
      <div className="footer-container">
        <div className="footer-logo">
          <NavLink to={"/"}>Snap-Store</NavLink>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil
            similique quia adipisci, illum dicta!
          </p>
          <div className="social-icons">
            <NavLink to={'https://www.facebook.com'}><FaFacebookF /></NavLink>
            <NavLink to={'https://www.linkedin.com'}><FaLinkedinIn /></NavLink>
            <NavLink to={'https://www.twitter.com'}><FaTwitter /></NavLink>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/product"}>Product</NavLink>
          <NavLink to={"/contact"}>Contact Us</NavLink>
          <NavLink to={"/cart"}>Cart</NavLink>
        </div>
        <div className="footer-quick-links">
          <CategoriesButton handleCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
        </div>
        <div className="footer-location">
          <h4>Location</h4>
          <p>
            <FaLocationDot />
            Lahore, Punjab, Pakistan
          </p>
          <p>
            <IoMdMail />
            Ghazanfarmahmood14@gmail.com
          </p>
          <p>
            <MdLocalPhone />
            +92 308 5900270
          </p>
        </div>
      </div>
      <div className="footer-copyright">
        All Right Reserved &copy; Ghazanfar Mahmood
      </div>
    </footer>
  );
};

export default Footer;
