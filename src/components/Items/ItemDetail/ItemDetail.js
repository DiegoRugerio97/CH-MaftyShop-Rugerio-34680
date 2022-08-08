// ItemDetail components, holds more information about product and also ItemCount component for specific product.
// ItemCount component
import ItemCount from "../ItemCount/ItemCount";
import FinishBrowsingButton from "../FinishBrowsingButton/FinishBrowsingButton";
// BS imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Styling
import "./ItemDetail.css"
// React Imports
import { useContext, useState } from "react";
// Context
import { CartContext } from "../../../context/CartContext";

const ItemDetail = ({itemID, itemImg, itemName, itemStock, itemLongDescription, itemPrice }) => {

    // State
    const [quantityToAdd, setQuantityToAdd] = useState();
    // Context
    const {addToCart} = useContext(CartContext);

    const addItemQuantity = (quantity) =>{
        setQuantityToAdd(quantity);
        addToCart(itemID, quantity, itemName, itemImg, itemPrice);
    }

    return <Row className="itemDetail">
        <Col xs={12} md={9} lg={5}>
            <img className="itemImg" src={itemImg} alt="Product" />
        </Col>
        <Col lg={7}>
            <Row className="itemRow">
                <div className="itemDetails">
                    <h1 className="itemName">{itemName}</h1>
                    <h2 className="itemPrice">{`$${itemPrice} (MXN)`}</h2>
                    <p className="itemDescription">{itemLongDescription}</p>
                </div>
                <div className="itemCount">
                    {quantityToAdd ? <FinishBrowsingButton/> : <ItemCount initial={1} stock={itemStock} onAdd={addItemQuantity} />}
                </div>
            </Row>
        </Col>
    </Row>


}

export default ItemDetail;