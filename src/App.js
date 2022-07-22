
// App principal
import './App.css';
// Importacion ItemListContainer

// Componente del NavBar
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './Items/ItemListContainer/ItemListContainer.js';


import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
    <NavBar />
      <Container><ItemListContainer greeting="Estamos en construccion!" /></Container>
    </>


  );
}

export default App;
