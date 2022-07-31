// ItemDetail components, holds more information about product and also ItemCount component for specific product.
// ItemCount component
import ItemCount from "../ItemCount/ItemCount";
// BS imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Styling
import "./ItemDetail.css"

const ItemDetail = ({ itemImg, itemName, itemStock, itemLongDescription, itemPrice }) => {

    return <Row className="itemDetail">
        <div className="backButtonContainer">
            <button className="backButton"><i className="fa-solid fa-angle-left"></i></button>
        </div>
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
                    <ItemCount initial={1} stock={itemStock} />
                </div>
            </Row>
        </Col>
    </Row>


}

export default ItemDetail;