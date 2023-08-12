import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="total-price">Total: ${totalPrice.toFixed(2)}</div>
    </div>
  );
}

export default Cart;
