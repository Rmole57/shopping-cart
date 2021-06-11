import axios from "axios"

const apiClient = {
  getProducts: function(callback) {
    return axios
      .get("/api/products")
      .then(response => callback(response.data))
      .catch(err => console.log(err));
  },

  addProduct: function(newProduct, callback) {
    return axios
      .post("/api/products", newProduct)
      .then(response => callback(response.data))
      .catch((err) => console.log(err));
  },

  deleteProduct: function(productId, callback) {
    return axios
      .delete(`/api/products/${productId}`)
      .then(callback)
      .catch((err) => console.log(err));
  },

  editProduct: function(id, updatedProduct, callback) {
    return axios
    .put(`/api/products/${id}`, updatedProduct)
    .then(response =>  callback(response.data))
    .catch((err) => console.log(err));
  },

  getCart: function(callback) {
    return axios
      .get("/api/cart")
      .then(response => callback(response.data))
      .catch((err) => console.log(err));
  },

  addCartItem: function(productToAdd, callback) {
    return axios
      .post("/api/cart", productToAdd)
      .then(response => callback(response.data))
      .catch((err) => console.log(err));
  },

  cartCheckout: function(callback) {
    return axios
      .post("/api/cart/checkout")
      .then(callback)
      .catch((err) => console.log(err));
  },
}

export default apiClient;