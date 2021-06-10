import React, { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { productsReceivedSuccess } from "../actions/productActions"

import Togglable from "./Togglable.js"
import Product from "./Product.js"
import AddProductForm from "./AddProductForm.js"

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    axios.get("/api/products")
      .then((response) => response.data)
      .then((data) => dispatch(productsReceivedSuccess(data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div className="product-listing">
      <h2>Products</h2>

      {products.map((product) => {
        const { _id, title, quantity, price } = product;
        return (
          <Product
            key={_id}
            id={_id}
            title={title}
            price={price}
            quantity={quantity} />
        )
      })}
      
      <Togglable buttonLabel="Add A Product">
        <AddProductForm />
      </Togglable>
    </div>
  )
}

export default ProductList
