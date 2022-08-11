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

    const {cartQuantity } = useContext(CartContext);

    useEffect(() => {
        const cartIsEmpty = cartQuantity === 0;
        if (cartIsEmpty) {
            return;
        }
        setPulseToggle(true);

        const timer = setTimeout(() => {
            setPulseToggle(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }

    }, [cartQuantity]);

    const cartIsEmpty = cartQuantity === 0

    if (!cartIsEmpty) {
        return <>
            <Button variant="dark" className={`position-relative ${pulseToggle ? "cartAnimation" : ""}`}>
                <i className="fa-solid fa-cart-shopping" />
                <Badge className="position-absolute" bg="dark">{cartQuantity}</Badge>
            </Button>
        </>;
    }
    return <></>;

}

export default CartWidget;