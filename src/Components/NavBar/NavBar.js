import React, {useState} from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../Img/logo.png';

const NavBar = () => {

    const [cartCount, setCartCount] = useState (0);
    const addItemToCart = () => {
        setCartCount(cartCount+1);
    }

    return(
        <nav style={{display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#eee', alignItems: 'center'}}>
            <div>
                <img src={logo} alt="Logo de Materia Joyas" style= {{height:'150px' }}></img>
            </div>
            <div>
                <a href="#" style={{color: 'inherit', textDecoration: 'none', margin: '0 1rem'}}>Inicio</a>
                <a href="#" style={{color: 'inherit', textDecoration: 'none', margin: '0 1rem'}}>Productos</a>
                <a href="#" style={{color: 'inherit', textDecoration: 'none', margin: '0 1rem'}}>Contacto</a>
            </div>
            <CartWidget count = {cartCount} />
            <button onClick={addItemToCart}>Agregar al carrito</button>
        </nav>
    );
};

export default NavBar;