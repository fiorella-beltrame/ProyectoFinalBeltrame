import React from 'react';

const CartItem = ({ item, removeItem }) => {
  const subtotal = item.precio * item.quantity;

  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
      <h3>{item.nombre}</h3>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio por unidad: ${item.precio}</p>
      <p>Subtotal: ${subtotal}</p>
      <button onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;