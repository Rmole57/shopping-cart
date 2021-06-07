import React, { useState } from "react";

const ProductForm = ({type, title, price, quantity}) => {
  return (
    <div className="add-form visible">
      <p><a className="button add-product-button">{type} A Product</a></p>
      <h3>{type} Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={title ? title : ""}/>
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={price ? price : ""}/>
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity !== undefined ? quantity : ""}/>
        </div>

        <div className="actions form-actions">
          <a className="button">{type === "Add" ? "Add" : "Update"}</a>
        </div>
      </form>
    </div>
  )
}

export default ProductForm;
