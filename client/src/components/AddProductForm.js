import React, { useState } from "react"

const AddProductForm = ({ onSubmission }) => {
    const [newTitle, setNewTitle] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newQuantity, setNewQuantity] = useState("");

    const resetInputs = () => {
        setNewTitle("");
        setNewPrice("");
        setNewQuantity("");
    };

    const handleSubmission = (e) => {
      e.preventDefault();
      const newProduct = {
        title: newTitle, price: newPrice, quantity: newQuantity,
      }
  
      onSubmission(newProduct); 
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
              value={newTitle}
              onChange = {(e) => setNewTitle(e.target.value)}
              />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input 
              type="text" 
              id="product-price" 
              value={newPrice}
              onChange = {(e) => setNewPrice(e.target.value)}
              />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input 
              type="text" 
              id="product-quantity" 
              value={newQuantity}
              onChange = {(e) => setNewQuantity(e.target.value)}
              />
          </div>

          <div className="actions form-actions">
            <a className="button" onClick={handleSubmission}>Add</a>
          </div>
        </form>
      </div>
    )
}

export default AddProductForm