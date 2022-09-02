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
import { useContext, useEffect, useState } from "react";
// Context
import { CartContext } from "../../../context/CartContext";

const ItemDetail = ({itemID, itemImg, itemName, itemStock, itemLongDescription, itemPrice }) => {

    // State
    const [quantityToAdd, setQuantityToAdd] = useState();
    const [updatedStock, setUpdatedStock] = useState(itemStock);
    // Context
    const {addToCart, findItemQuantity} = useContext(CartContext);
    // 

    // Effect
    useEffect(()=>{
        const stockInCart = findItemQuantity(itemID);
        setUpdatedStock(itemStock - stockInCart);
    },[findItemQuantity, itemID, itemStock]);


    const addItemQuantity = (quantity) =>{
        setQuantityToAdd(quantity);
        addToCart(itemID, quantity, itemName, itemImg, itemPrice);
    }

    return <Row className="itemDetail">
        <Col xs={12} md={9} lg={5}>
            <img className="itemDetail-img" src={itemImg} alt="Product" />
        </Col>
        <Col lg={7}>
            <Row className="itemRow">
                <div className="itemDetails">
                    <h1 className="itemDetails-name">{itemName}</h1>
                    <h2 className="itemDetails-price">{`$${itemPrice} (MXN)`}</h2>
                    <p className="itemDetails-description">{itemLongDescription}</p>
                </div>
                <div className="itemDetails-count">
                    {quantityToAdd ? <FinishBrowsingButton/> : <ItemCount initial={1} stock={updatedStock} onAdd={addItemQuantity} />}
                </div>
            </Row>
        </Col>
    </Row>


}

export default ItemDetail;