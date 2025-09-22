import React, {useState} from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../Img/logo.png';
import { Link } from 'react-router-dom';

const linkContainer = {
    display: 'flex',
    gap: '1.5rem',
};

const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
};

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#eee', alignItems: 'center' }}>
      <div>
        <img src={logo} alt="Logo de Materia Joyas" style={{ height: '150px' }} />
      </div>
      <div style={linkContainer}>
        <Link to="/" style={linkStyle}>Inicio</Link>
        <Link to="/category/anillos" style={linkStyle}>Anillos</Link>
        <Link to="/category/collares" style={linkStyle}>Collares</Link>
        <Link to="/category/pulseras" style={linkStyle}>Pulseras</Link>
        <Link to="/category/caravanas" style={linkStyle}>Caravanas</Link>
        <Link to="/contacto" style={linkStyle}>Contacto</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;