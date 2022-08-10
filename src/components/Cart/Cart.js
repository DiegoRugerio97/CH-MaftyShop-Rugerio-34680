// Cart component - Display items in CartContext
// Styling
import "./Cart.css";
// Context
import { CartContext } from "../../context/CartContext";
// React imports
import { useContext } from "react";
// BS imports
import Container from 'react-bootstrap/Container';
import CartTable from "./CartTable/CartTable";


const Cart = () => {

    const { cart, cartTotal, cartQuantity } = useContext(CartContext);

    const cartIsEmpty = cart.length === 0;

    return <Container>
        {!cartIsEmpty && <CartTable cart={cart} cartTotal = {cartTotal} cartQuantity = {cartQuantity}/>}
        {cartIsEmpty && <h1>Sin Carrito</h1>}
    </Container>

}

export default Cart;
