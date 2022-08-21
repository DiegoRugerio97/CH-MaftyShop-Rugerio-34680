// App component - Main component of webapp
// Styling
import './App.css';
//Custom components
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './components/Items/ItemDetailContainer/ItemDetailContainer';
import AboutUs from './components/AboutUs/AboutUs';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
// Custom Context Provider
import CartProvider from './context/CartContext';
// BS components
import Container from 'react-bootstrap/Container';
// React imports
import React from 'react';
// Router imports
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Container fluid>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="item/:itemID" element={<ItemDetailContainer />} />
            <Route path="category/:categoryName" element={<ItemListContainer />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
        </Container>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
