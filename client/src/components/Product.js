import React from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { productDeletedSuccess, productEditedSuccess } from "../actions/productActions"
import { cartItemAddedSuccess } from "../actions/cartActions"
 
import Togglable from "./Togglable.js"
import EditProductForm from "./EditProductForm.js"

const Product = ({title, price, quantity, id}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (quantity <= 0) return;

    const updatedProduct = { title, price, quantity: quantity - 1, id }
    
    axios
      .put(`/api/products/${id}`, updatedProduct)
      .then(response =>  {
        dispatch(productEditedSuccess(response.data))
      })
      .catch((err) => console.log(err));
  
    const productToAdd = { productId: id, title, price };
  
    axios
      .post("/api/cart", productToAdd)
      .then(response => {
        dispatch(cartItemAddedSuccess(response.data))
      }) 
      .catch((err) => console.log(err));
  }

  const handleDeleteProduct = (e) => {
    e.preventDefault();

    axios
      .delete(`/api/products/${id}`)
      .then(() => {
        dispatch(productDeletedSuccess(id));
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>

        <div className="actions product-actions">
          <a href="#" onClick={handleAddToCart} className={`button add-to-cart${quantity > 0 ? "" : " disabled"}`}>Add to Cart</a>
          <Togglable buttonLabel="Edit">
            <EditProductForm
              title={title}
              price={price}
              quantity={quantity}
              id={id} />
          </Togglable>
        </div>
        <a href="#" onClick={handleDeleteProduct} className="delete-button"><span>X</span></a>
      </div>
    </div>

  )
}

export default Product
