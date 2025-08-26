import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productos from '../Productos/Productos';

const ItemListContainer = ({ saludo }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(productos.filter(prod => prod.categoria === categoryId));
        } else {
          resolve(productos);
        }
      }, 1000);
    });

    obtenerProductos.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <section style={{ padding: '2rem' }}>
      <h2>{saludo}</h2>
      {items.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ul>
          {items.map(prod => (
            <li key={prod.id}>
                <Link 
                    to={`/item/${prod.id}`} 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    {prod.nombre}
                </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ItemListContainer;
