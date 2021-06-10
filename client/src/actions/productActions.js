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
