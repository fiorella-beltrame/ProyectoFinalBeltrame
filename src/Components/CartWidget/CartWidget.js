import React from 'react';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
      🛒 <span>{totalItems}</span>
    </Link>
  );
};

export default CartWidget;