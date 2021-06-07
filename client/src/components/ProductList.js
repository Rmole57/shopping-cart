import React from "react";
import Togglable from "./Togglable.js";
import Product from "./Product.js"
import ProductForm from "./ProductForm.js"


const ProductList = ({ products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>

      {products.map((product) => {
        console.log(product);
        return (
          <Product key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            quantity={product.quantity} />
        )
      })}
      
      <Togglable buttonLabel="Add A Product">
        <ProductForm type="Add" />
      </Togglable>
    </div>
  )
}

export default ProductList;
