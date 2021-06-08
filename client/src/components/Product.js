import React from "react";
import Togglable from "./Togglable.js";
import EditProductForm from "./EditProductForm.js"


const Product = ({title, price, quantity, id, onSubmission}) => {
  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>

        <div className="actions product-actions">
          <a href="#" className="button add-to-cart">Add to Cart</a>
          <Togglable buttonLabel="Edit">
            <EditProductForm
              title={title}
              price={price}
              quantity={quantity}
              id={id}
              onSubmission={onSubmission} />
          </Togglable>
        </div>
        <a href="#" className="delete-button"><span>X</span></a>
      </div>
    </div>

  )
}

export default Product