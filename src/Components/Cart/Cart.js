
import React from 'react';
import { useCart } from '../Context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, clearCart, totalItems, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <section style={{ padding: '2rem' }}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al inicio</Link>
      </section>
    );
  }

  return (
    <section style={{ padding: '2rem' }}>
      <h2>Tu Carrito 🛒</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} removeItem={removeItem} />
      ))}

      <h3>Total de productos: {totalItems}</h3>
      <h3>Total a pagar: ${totalPrice}</h3>

      <button onClick={clearCart}>Vaciar carrito</button>
      <br />
      <Link to="/checkout">
        <button style={{ marginTop: '1rem' }}>Finalizar compra</button>
      </Link>
    </section>
  );
};

export default Cart;