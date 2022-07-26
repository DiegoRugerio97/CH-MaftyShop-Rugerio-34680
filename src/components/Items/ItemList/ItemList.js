import Item from "../Item/Item";

import "./ItemList.css"

import Row from 'react-bootstrap/Row';


const ItemList = props => {

    const items = props.items.map(
        item => <Item key={item.id} itemName={item.itemName} itemImg={item.itemImg} itemDescription={item.itemDescription} itemStock={item.itemStock}/>);
    return (
        <Row className="itemsContainer">
            {items}
        </Row>
    );
}

export default ItemList;