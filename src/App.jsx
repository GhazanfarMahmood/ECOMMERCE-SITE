import React , { useState } from "react";

//Css 
import "./App.scss";

//Common
import NavBar from "./common/Navbar/NavBar";
import Footer from "./common/Footer/Footer";

// Pages
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Product from "./pages/Products/Product";
import Contact from "./pages/Contact/Contact";
import Cart from './pages/Cart/Cart'
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Description from "./pages/Description/Description";

// Route and Routes from react-router-dom
import { Route, Routes } from "react-router-dom";

//ContextProvider
import ContextProvider from "./Context/ContextProvider";

//ContextCategory from Context Folder
import { ProductCategoryProvider } from "./Context/CategoryContext";



const App = () => {


  return (
    <>
    <ContextProvider>
      <ProductCategoryProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/description" element={<Description />} />
      </Routes>
      <Footer  />
      </ProductCategoryProvider>
      </ContextProvider>
    
    </>
  );
};

export default App;
