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
// Router imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar itemsInCart={0} />
      <Container fluid>
        <Routes>
          <Route path="/" element={ <ItemListContainer />} />
          <Route path ="item/:itemID" element = {<ItemDetailContainer/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
