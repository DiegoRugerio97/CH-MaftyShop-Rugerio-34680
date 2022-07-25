// Styling
import "./ItemListContainer.css";

// BS components
import Container from 'react-bootstrap/Container';
import ItemList from "../ItemList/ItemList";



const ItemListContainer = (props) => {

    const items = [];

    const fetchItems = () => {
        return [];
    }

    return <Container>
        <h1 className="msj">{props.greeting}</h1>
        <ItemList items={items} />
    </Container>;
}

export default ItemListContainer;