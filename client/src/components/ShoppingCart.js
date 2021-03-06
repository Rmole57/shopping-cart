import React, { useEffect } from "react"
import CartItem from "./CartItem.js"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { cartReceivedSuccess, cartCheckoutSuccess } from "../actions/cartActions"

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart)
  
  const calculateTotal = () => {
    const total = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)


    return total.toFixed(2);
  }
  
  const handleCheckout = (e) => {
    e.preventDefault();
    
    axios
      .post("/api/cart/checkout")
      .then(() => dispatch(cartCheckoutSuccess()))
      .catch((err) => console.log(err));
  }

  useEffect(() => {    
    axios.get("/api/cart")
      .then(response => dispatch(cartReceivedSuccess(response.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return  (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ?
        <p>Your cart is empty</p>
        : <table className="cart-items">
            <tbody>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              {cartItems.map(item => (
                <CartItem key={item._id}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity} />
              ))}
              <tr>
                <td colSpan="3" className="total">Total: ${calculateTotal()}</td>
              </tr>
            </tbody>
          </table>
      }
      <a href="#"
        className={`button checkout${cartItems.length === 0 ? " disabled" : ""}`}
        onClick={handleCheckout}>
          Checkout
      </a>
    </div>
  )
};

export default ShoppingCart
