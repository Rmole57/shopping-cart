import apiClient from "../lib/apiClient"

export const cartReceivedSuccess = (cart) => {
  return { type: 'CART_RECEIVED', payload: { cart } };
};

export const cartItemAddedSuccess = (newItem) => {
  return { type: 'CART_ITEM_ADDED', payload: { newItem } };
};

export const cartCheckoutSuccess = () => {
  return { type: 'CART_CHECKOUT_SUCCESS', payload: {} };
};

export const cartReceived = () => {
  return function (dispatch) {
    apiClient.getCart(cart => {
      dispatch(cartReceivedSuccess(cart))
    });
  };
};

export const cartItemAdded = (productToAdd) => {
  return function (dispatch) {
    apiClient.addCartItem(productToAdd, (item) => {
      dispatch(cartItemAddedSuccess(item))
    })
  };
};

export const cartCheckout = () => {
  return function (dispatch) {
    apiClient.cartCheckout(() => {
      dispatch(cartCheckoutSuccess())
    })
  };
};
