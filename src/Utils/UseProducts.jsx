import axios from 'axios';

//useEffect and useState Hooks Imported from react
import React, { useEffect, useState } from 'react'

const UseProducts = () => {
   const [products, setProducts] = useState([]);

   useEffect(() =>{
    const fetchData = async () =>{
        try{
            
        const response = await axios.get("https://fakestoreapi.com/products")
        setProducts(response.data.filter((items) => items))
    }catch(error){
        console.log("Something went wrong ", error);
    }
    }
    fetchData();
   }, [])

  return products;
}

export default UseProducts