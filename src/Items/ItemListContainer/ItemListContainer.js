
// ItemCount Component
import ItemCount from "../ItemCount/ItemCount";
// Styling
import "./ItemListContainer.css";

const ItemListContainer = (props) => {

    return <>
    <h1 className = "msj">{props.greeting}</h1>
    <ItemCount stock = {props.stock} initial = {1} onAdd={props.onAdd}/>
    </>;
}

export default ItemListContainer;