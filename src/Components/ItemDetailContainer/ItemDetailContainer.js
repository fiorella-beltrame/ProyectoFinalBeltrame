import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../Productos/Productos';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        const producto = productos.find(p => p.id === itemId);
        resolve(producto);
      }, 1000);
    });

    getItem.then((res) => setItem(res));
  }, [itemId]);

  return (
    <section style={{ padding: '2rem' }}>
      {item ? (
        <>
          <h2>{item.nombre}</h2>
          <p>{item.descripcion}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </section>
  );
};

export default ItemDetailContainer;