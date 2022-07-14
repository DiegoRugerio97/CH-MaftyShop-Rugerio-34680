
// App principal
import './App.css';
// Importacion ItemListContainer
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
// Componente del NavBar
import NavBar from './components/NavBar/NavBar.js';

function App() {
  return (
    <><NavBar />
      <ItemListContainer greeting="Estamos en construccion!" /></>

  );
}

export default App;
