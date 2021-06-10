export const cartReceivedSuccess = (cart) => {
  return { type: 'CART_RECEIVED', payload: { cart } };
};

export const cartItemAddedSuccess = (newItem) => {
  return { type: 'CART_ITEM_ADDED', payload: { newItem } };
};

export const cartCheckoutSuccess = () => {
  return { type: 'CART_CHECKOUT_SUCCESS', payload: {} };
};