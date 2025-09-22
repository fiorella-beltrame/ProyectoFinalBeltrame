import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const ItemCount = ({ item, stock }) => {
  const [count, setCount] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = () => {
    addToCart(item, count); 
    setAdded(true);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      {!added ? (
        <>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button onClick={() => setCount(Math.max(1, count - 1))}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(Math.min(stock, count + 1))}>+</button>
          </div>
          <button onClick={handleAdd} style={{ marginTop: '0.5rem' }}>
            Agregar al carrito
          </button>
        </>
      ) : (
        <button onClick={() => navigate('/cart')}>Ir al carrito 🛒</button>
      )}
    </div>
  );
};

export default ItemCount;
