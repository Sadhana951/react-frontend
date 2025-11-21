import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementItem, decrementItem, deleteItem } from '/src/redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const itemsArray = Object.values(cartItems);

  const totalQuantity = itemsArray.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = itemsArray.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Cart</h1>
      <p>Total items: {totalQuantity}</p>
      <p>Total cost: ₹{totalCost.toFixed(2)}</p>

      {itemsArray.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        itemsArray.map(item => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <img src={`/assets/${item.thumbnail}`} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '10px' }} />
            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div>
                <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
                <button onClick={() => dispatch(decrementItem(item.id))} disabled={item.quantity <= 1}>-</button>
                <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
              </div>
            </div>
          </div>
        ))
      )}
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => alert('Coming Soon')}>Checkout</button>
        <button onClick={() => navigate('/products')} style={{ marginLeft: '10px' }}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default CartPage;
