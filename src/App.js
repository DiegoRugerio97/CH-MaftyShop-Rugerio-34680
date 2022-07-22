
import './App.css';
//Importing components
import ItemListContainer from './Items/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';

// BS components
import Container from 'react-bootstrap/Container';

// React imports
import React from 'react';
import { useState } from 'react';

function App() {

  // States for testing of ItemCount component
  const [itemsInCart,setItemInCart] = useState(0);
  const [itemStock, setItemStock] = useState(20);

  // onAdd function to test ItemCount component
  const onAdd = (items) =>{
    setItemInCart(prevState => prevState + items);
    setItemStock(prevState => prevState - items);
  }

  // Two components, NavBar to show CartWidget with itemsInCart state
  // ItemListContainer to temporarily hold ItemCount
  return (
    <>
    <NavBar itemsInCart={itemsInCart}/>
      <Container><ItemListContainer greeting="Estamos en construccion!" onAdd = {onAdd} stock ={itemStock}/></Container>
    </>


  );
}

export default App;
