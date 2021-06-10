import React, { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { productAddedSuccess } from "../actions/productActions"

const AddProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const dispatch = useDispatch();

    const resetInputs = () => {
        setTitle("");
        setPrice("");
        setQuantity("");
    };

    const handleAddProduct = (e) => {
      e.preventDefault();

      const newProduct = { title, price, quantity };

      axios
        .post("/api/products", newProduct)
        .then(response => {
          dispatch(productAddedSuccess(response.data))
        })
        .catch((err) => console.log(err));

      resetInputs();
    }
    
    return (
      <div className="add-form visible">
        <p><a className="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <form id="product-form"> 
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input 
              type="text" 
              id="product-name" 
              value={title}
              onChange = {(e) => setTitle(e.target.value)}
              />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input 
              type="text" 
              id="product-price" 
              value={price}
              onChange = {(e) => setPrice(e.target.value)}
              />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input 
              type="text" 
              id="product-quantity" 
              value={quantity}
              onChange = {(e) => setQuantity(e.target.value)}
              />
          </div>

          <div className="actions form-actions">
            <a className="button" onClick={handleAddProduct}>Add</a>
          </div>
        </form>
      </div>
    )
}

export default AddProductForm
