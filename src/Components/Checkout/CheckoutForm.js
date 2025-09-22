import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      comprador: { nombre, telefono, email },
      items: cart.map(item => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        cantidad: item.quantity,
      })),
      total: totalPrice,
      fecha: Timestamp.fromDate(new Date()),
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), orden);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error generando pedido:', error);
    }
  };

  if (orderId) {
    return (
      <section style={{ padding: '2rem' }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu código de pedido es: <strong>{orderId}</strong></p>
        <button onClick={() => navigate('/')}>Volver al inicio</button>
      </section>
    );
  }

  return (
    <section style={{ padding: '2rem' }}>
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Generar pedido</button>
      </form>
    </section>
  );
};

export default CheckoutForm;