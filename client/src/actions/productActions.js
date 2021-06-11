import apiClient from "../lib/apiClient";

export const productsReceivedSuccess = (products) => {
  return { type: 'PRODUCTS_RECEIVED', payload: { products } };
};

export const productAddedSuccess = (newProduct) => {
  return { type: 'PRODUCT_ADDED', payload: { newProduct }  };
};

export const productDeletedSuccess = (productId) => {
  return { type: 'PRODUCT_DELETED', payload: { productId } };
};

export const productEditedSuccess = (product) => {
  return { type: 'PRODUCT_EDITED', payload: { product } };
};

export const productsReceived = () => {
  return function (dispatch) {
    apiClient.getProducts(products => {
      dispatch(productsReceivedSuccess(products))
    })
  }
};

export const productAdded = (newProduct, callback) => {
  return function (dispatch) {
    apiClient.addProduct(newProduct, product => {
      dispatch(productAddedSuccess(product));
    })
    if (callback) { callback() };
  }
};

export const productDeleted = (productId) => {
  return function (dispatch) {
    apiClient.deleteProduct(productId, () => {
      dispatch(productDeletedSuccess(productId))
    })
  }
};

export const productEdited = (id, product) => {
  return function (dispatch) {
    apiClient.editProduct(id, product, (updatedProduct) => {
      dispatch(productEditedSuccess(updatedProduct))
    })
  };
};
