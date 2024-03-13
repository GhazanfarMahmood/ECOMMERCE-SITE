import React from "react";

//CSS for Home Hero
import "./HomeHero.scss";

//NavLink 
import { NavLink } from "react-router-dom";

const HomeHero = () => {
  return (
    <>
      <div className="home-hero-container ps-3">
        <h1>Welcome to our  <span>Snap-Store</span></h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, quas porro quasi ratione ab iusto veniam, dolorem id a explicabo suscipit.</p>
        <div className="home-hero-button">
        <NavLink className="btn" to={'/product'}>Start Shoping</NavLink>
        <NavLink className='btn' to={'/about'}>Learn More!</NavLink>
        </div>
      </div>

    </>
  );
};

export default HomeHero;
