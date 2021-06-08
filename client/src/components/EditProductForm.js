import React, { useState } from "react";

const EditProductForm = ({id, title, price, quantity, onSubmission}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleSubmission = (e) => {
    e.preventDefault();
    const newProduct = {
      title: newTitle, price: newPrice, quantity: newQuantity, id,
    }

    onSubmission(newProduct);
  }

  return (
    <div className="add-form visible">
      <p><a className="button add-product-button">Edit A Product</a></p>
      <h3>Edit Product</h3>
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
          <a 
            className="button" 
            onClick={handleSubmission}>Update
          </a>
        </div>
      </form>
    </div>
  )
}

export default EditProductForm