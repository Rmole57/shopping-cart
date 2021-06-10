import React, { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { productEditedSuccess } from "../actions/productActions"

const EditProductForm = ({id, title, price, quantity, onSubmission}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const dispatch = useDispatch();

  useEffect(() => {
    setNewQuantity(quantity);
  }, [quantity]);

  const handleEditProduct = (e) => {
    e.preventDefault();
    
    const updatedProduct = { 
      title: newTitle, 
      quantity: newQuantity, 
      price: newPrice }
    axios
      .put(`/api/products/${id}`, updatedProduct)
      .then(response =>  {
        dispatch(productEditedSuccess(response.data))
      })
      .catch((err) => console.log(err));
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
            onChange = {(e) => setNewTitle(e.target.value)}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input 
            type="text" 
            id="product-price" 
            value={newPrice}
            onChange = {(e) => setNewPrice(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input 
            type="text" 
            id="product-quantity" 
            value={newQuantity}
            onChange = {(e) => setNewQuantity(e.target.value)}/>
        </div>

        <div className="actions form-actions">
          <a 
            className="button" 
            onClick={handleEditProduct}>Update
          </a>
        </div>
      </form>
    </div>
  )
}

export default EditProductForm
