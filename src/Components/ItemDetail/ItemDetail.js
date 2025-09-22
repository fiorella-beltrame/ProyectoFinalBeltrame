import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>{item.nombre}</h2>
      <p>{item.descripcion}</p>
      <ItemCount item={item} stock={item.stock || 10} />
    </section>
  );
};

export default ItemDetail;