import React from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Bienvenido/a a Materia Joyas!" />
    </>

  );
}

export default App;
