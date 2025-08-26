import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>404 - Página no encontrada</h2>
      <p>La página que estás buscando no existe</p>
      <Link 
        to="/" 
        style={{ 
          color: 'inherit',      
          textDecoration: 'none'  
        }}
      >
        Volver al inicio
      </Link>
    </section>
  );
};

export default NotFound;