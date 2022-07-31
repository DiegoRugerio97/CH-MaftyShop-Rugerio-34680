// App component - Main component of webapp
// Styling
import './App.css';
//Custom components
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
// BS components
import Container from 'react-bootstrap/Container';
// React imports
import React, { useState } from 'react';
// Testing ItemDetailContainer - TEMP
import ItemDetailContainer from './components/Items/ItemDetailContainer/ItemDetailContainer';

function App() {

  // Temp function and state to test ItemDetailContainer and ItemDetail
  const [itemID, setItemID] = useState(0);

  const onDetailClick = id => {
    setItemID(id);
  }

  return (
    <>
      <NavBar itemsInCart={0} />
      <Container fluid>
        <ItemListContainer onDetailClick = {onDetailClick}/>
        <ItemDetailContainer id={itemID}/>
      </Container>
    </>
  );
}

export default App;
