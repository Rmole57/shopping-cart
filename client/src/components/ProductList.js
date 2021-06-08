import React from "react";
import Togglable from "./Togglable.js";
import Product from "./Product.js"
import AddProductForm from "./AddProductForm.js"



const ProductList = ({ products, onAddProduct, onEditProduct }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>

      {products.map((product) => {
        const { _id, title, quantity, price } = product
        return (
          <Product
            key={_id}
            id={_id}
            title={title}
            price={price}
            quantity={quantity}
            onSubmission={onEditProduct} />
        )
      })}
      
      <Togglable buttonLabel="Add A Product">
        <AddProductForm onSubmission={onAddProduct} />
      </Togglable>
    </div>
  )
}

export default ProductList;
