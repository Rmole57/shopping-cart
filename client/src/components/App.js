import React from "react"
import ShoppingCart from "./ShoppingCart.js"
import ProductList from "./ProductList.js"    


const App = () => {
  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <ShoppingCart />
      </header>

      <main>
        <ProductList />
      </main>
    </div>
  );
};

export default App
