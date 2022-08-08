// Cart Component - Open Cart and track added items
import "./CartWidget.css";
// BS Imports
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
// Context
import {CartContext} from "../../context/CartContext";
// React imports
import {useContext} from 'react';

const CartWidget = () => {
    // Context
    const {cartQuantity} = useContext(CartContext);

    return <>
        <Button variant="dark" className="position-relative">
            <i className="fa-solid fa-cart-shopping"/>
            <Badge className="position-absolute" bg="dark">{ cartQuantity | 0}</Badge>
        </Button>
    </>;
}

export default CartWidget;