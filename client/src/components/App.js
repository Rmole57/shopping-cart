import React, { useState, useEffect } from "react";
import data from "../lib/data.js";
import ShoppingCart from "./ShoppingCart.js";
import ProductList from "./ProductList.js"         

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data)
  }, []);
  
  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <ShoppingCart />
      </header>
      
      <main>
        <ProductList products={products} />
        {/* <input type= /> */}
      </main>
    </div>
  );
};

export default App;
