import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "Productos", itemId);
    getDoc(docRef)
      .then(docSnap => {
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          setItem(null); 
        }
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!item) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <section style={{ padding: '2rem' }}>
      <ItemDetail item={item} />
    </section>
  );
};

export default ItemDetailContainer;