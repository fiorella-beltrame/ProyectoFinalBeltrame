import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Bienvenido/a a Materia Joyas!" />
    </>

  );
}

export default App;
