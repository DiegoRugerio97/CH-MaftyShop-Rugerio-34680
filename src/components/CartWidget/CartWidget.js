// Cart Component - Open Cart and track added items
import "./CartWidget.css";
// BS Imports
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from "react";
// Context
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const [pulseToggle, setPulseToggle] = useState(false);

    const { cartQuantity } = useContext(CartContext);

    useEffect(() => {
        
        setPulseToggle(true);

        const timer = setTimeout(() => {
            setPulseToggle(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }

    }, [cartQuantity]);

    const cartIsEmpty = cartQuantity === 0;

    return <>
        <Button variant="dark" className={`position-relative ${pulseToggle ? "cartAnimation" : ""}`}>
            <i className="fa-solid fa-cart-shopping" />
            {!cartIsEmpty && <Badge className="position-absolute" bg="dark">{cartQuantity}</Badge>}
        </Button>
    </>;
}

export default CartWidget;