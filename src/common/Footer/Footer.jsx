import React from "react";

//Footer scss
import "./Footer.scss";
import { NavLink } from "react-router-dom";

import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
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
          <h4>Quick Links</h4>
          <NavLink to={"/"}>Link 1</NavLink>
          <NavLink to={"/"}>Link 2</NavLink>
          <NavLink to={"/"}>Link 3</NavLink>
          <NavLink to={"/"}>Link 4</NavLink>
          <NavLink to={"/"}>Link 5</NavLink>
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
