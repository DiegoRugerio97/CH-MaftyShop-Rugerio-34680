// App component - Main component of webapp
// Styling
import './App.css';
//Custom components
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
// BS components
import Container from 'react-bootstrap/Container';
// React imports
import React from 'react';
// Testing ItemDetailContainer - TEMP
import ItemDetailContainer from './components/Items/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <NavBar itemsInCart={0} />
      <Container fluid>
        <ItemListContainer/>
        <ItemDetailContainer id={0}/>
      </Container>
    </>
  );
}

export default App;
