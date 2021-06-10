export const products = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED': {
      return action.payload.products;
    }
    case 'PRODUCT_ADDED': {
      return state.concat(action.payload.newProduct);
    }
    case 'PRODUCT_DELETED': {
      return state.filter(product => product._id !== action.payload.productId);
    }
    case 'PRODUCT_EDITED': {
      const updatedProduct = action.payload.product;
      return state.map(product => product._id === updatedProduct._id ? updatedProduct : product);
    }
    default:
      return state;
  }
}
