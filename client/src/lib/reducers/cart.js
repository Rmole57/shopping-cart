export const cart = (state = [], action) => {
  switch (action.type) {
    case 'CART_RECEIVED': {
      return action.payload.cart;
    }
    case 'CART_ITEM_ADDED': {
      let foundMatch = false;
      const addedItem = action.payload.newItem;
      
      const updatedCart = state.map(cartItem => {
        if (cartItem.productId === addedItem.productId) {
          foundMatch = true;
          cartItem.quantity++;
        } 
        return cartItem; 
      });

      if (!foundMatch) {
        updatedCart.push(addedItem);
      }

      return updatedCart;
    }
    case 'CART_CHECKOUT_SUCCESS': {
      return [];
    }
    default:
      return state;
  }
}
