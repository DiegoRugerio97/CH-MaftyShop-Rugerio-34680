// ItemList component - Render a collection of items
// Item component
import Item from "../Item/Item";
// Styling
import "./ItemList.css"
// BS imports
import Row from 'react-bootstrap/Row';

const ItemList = ({itemsList}) => {

    const items = itemsList.map(
        item => <Item key={item.id} itemID = {item.id} itemName={item.itemName} itemImg={item.itemImg} itemDescription={item.itemDescription} itemStock={item.itemStock}/>);
    return (
        <Row className="itemsContainer">
            {items}
        </Row>
    );
}

export default ItemList;