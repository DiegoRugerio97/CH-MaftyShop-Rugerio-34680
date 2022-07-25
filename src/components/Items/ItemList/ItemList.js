import Item from "../Item/Item";

import "./ItemList.css"


const ItemList = props => {

    const items = props.items.map(
        item => <Item key={item.id} itemName={item.itemName} itemImg={item.itemImg} itemDescription={item.itemDescription} />);
    return (
        <div className="itemsContainer">
            {items}
        </div>
    );
}

export default ItemList;