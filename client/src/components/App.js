import React, { useState, useEffect } from "react";
import axios from "axios";
import ShoppingCart from "./ShoppingCart.js";
import ProductList from "./ProductList.js"         

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/products")
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
    
    axios.get("/api/cart")
      .then((response) => response.data)
      .then((data) => setCart(data))
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
    axios
      .put(`/api/products/${id}`, updatedProduct)
      .then(response => response.data)
      .then(finalProduct => {
        const updatedProducts = products.map(product => {
          return (product._id === finalProduct._id) ? finalProduct : product; 
        })

        setProducts(updatedProducts); // close form when update is clicked
      })
      .catch((err) => console.log(err));
  }

  const handleDeleteProduct = (id) => { 
    axios
      .delete(`/api/products/${id}`)
      .then(() => {
        const updatedProducts = products.filter(product => {
          return (product._id !== id)
        })

        setProducts(updatedProducts); // close form when update is clicked
      })
      .catch((err) => console.log(err));
  }

  const handleAddToCart = (currentProduct) => {
    currentProduct.quantity--;
    // need to update state of that element in product list
    handleEditProduct(currentProduct);

    let productToAdd = {
      productId: currentProduct.id, 
      title: currentProduct.title,
      price: currentProduct.price,
    }

    axios
      .post("/api/cart", productToAdd)
      .then(response => response.data)
      .then(addedItem => {
        let foundMatch = false;
        const updatedCart = cart.map(cartItem => {
          if (cartItem.productId === addedItem.productId) {
            foundMatch = true;
            cartItem.quantity++;
          } 

          return cartItem; 
        });

        if (!foundMatch) {
          updatedCart.push(addedItem);

        }

        setCart(updatedCart);
      })
      .catch((err) => console.log(err));
  }

  const handleCheckout = () => {
    axios
      .post("/api/cart/checkout")
      .then(() => setCart([]))
      .catch((err) => console.log(err));
  }
  
  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <ShoppingCart cartItems={cart} onCheckout={handleCheckout} />
      </header>
      
      <main>
        <ProductList products={products} 
          onAddProduct={handleAddProduct}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
          onAddToCart={handleAddToCart} />

      </main>
    </div>
  );
};

export default App;

// post a product
// /// 
