import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <li>
      <Link 
        to={`/item/${producto.id}`} 
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {producto.nombre}
      </Link>
    </li>
  );
};

export default Item;