// Componente ItemListContainer Catalogo de productos
// Estilos
import ItemCount from "../ItemCount/ItemCount";

import "./ItemListContainer.css";

const ItemListContainer = (props) => {

    return <>
    <h1 className = "msj">{props.greeting}</h1>
    <ItemCount stock = {10} initial = {1} />
    </>;
}

export default ItemListContainer;