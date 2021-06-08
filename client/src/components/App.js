import React, { useState, useEffect } from "react";
import axios from "axios";
import ShoppingCart from "./ShoppingCart.js";
import ProductList from "./ProductList.js"         

const App = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get("/api/products")
    .then((response) => response.data)
    .then((data) => setProducts(data))
    .catch((err) => console.log(err));
  }, []);

  const handleAddProduct = (newProduct) => {
    axios
      .post("/api/products", newProduct)
      .then(response => {
        setProducts(products.concat(response.data))
      })
      .catch((err) => console.log(err));
  }

  const handleEditProduct = (newProduct) => {
    const id = newProduct.id; 
    const updatedProduct = { title: newProduct.title, quantity: newProduct.quantity, price: newProduct.price }
    let updatedProducts;
    axios
      .put(`/api/products/${id}`, updatedProduct)
      .then(response => response.data)
      .then(finalProduct => {
        updatedProducts = products.map(product => {
          return (product._id === finalProduct._id) ? finalProduct : product; 
        })

        setProducts(updatedProducts); // close form when update is clicked
      })
      
  }

  // define handleAddProduct -> ProductList -> ProductForm
  // define handleEditProduct -> ProductList -> Product -> ProductForm
  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <ShoppingCart />
      </header>
      
      <main>
        <ProductList products={products} 
        onAddProduct={handleAddProduct}
        onEditProduct={handleEditProduct} 
        />
        {/* <input type= /> */}
      </main>
    </div>
  );
};

export default App;

// post a product
// /// 
