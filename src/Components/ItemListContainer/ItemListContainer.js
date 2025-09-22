import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ saludo }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const productosRef = collection(db, "Productos");

    const q = categoryId
      ? query(productosRef, where("categoria", "==", categoryId))
      : productosRef;

    getDocs(q)
      .then(snapshot => {
        const productosData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(productosData);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <section style={{ padding: '2rem' }}>
      <h2>{saludo}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList productos={items} />
      )}
    </section>
  );
};

export default ItemListContainer;