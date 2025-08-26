import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route} from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Contacto from './Components/Contacto/Contacto';




function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path = "/" element = {<ItemListContainer saludo = "Bienvenido/a a Materia Joyas!"/>}/>
        <Route path = "/category/:categoryId" element = {<ItemListContainer saludo = "Filtrado por categoría"/>}/>
        <Route path = "/item/:itemId" element = {<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>

  );
}

export default App;
