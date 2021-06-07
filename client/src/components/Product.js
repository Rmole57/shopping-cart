import React from "react";
import Togglable from "./Togglable.js";
import ProductForm from "./ProductForm.js";

const Product = ({title, price, quantity, id}) => {
  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>

        <div className="actions product-actions">
          <a href="#" className="button add-to-cart">Add to Cart</a>
        </div>

        <a href="#" className="delete-button"><span>X</span></a>
      </div>
      <Togglable buttonLabel="Edit">
        <ProductForm type="Edit" title={title} price={price} quantity={quantity} id={id} />
      </Togglable>
    </div>

  )
}

export default Product