// Cart component - Display items in CartContext
// Styling
import "./Cart.css";
// Context
import { CartContext } from "../../context/CartContext";
// React imports
import { useContext } from "react";
// React Router imports
import { Link } from 'react-router-dom';
// BS imports
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
// Custom imports
import CartTable from "./CartTable/CartTable";
import ContinueBrowsing from "./ContinueBrowsing/ContinueBrowsing";


const Cart = () => {

    const { cart, cartTotal, cartQuantity } = useContext(CartContext);

    if (!cartQuantity) {
        return <Container>
            <ContinueBrowsing />
        </Container>
    }

    return <Container>
        <CartTable cart={cart} cartTotal={cartTotal} cartQuantity={cartQuantity} />
        <Link className="checkoutLink" to={"/checkout"}>
            <Button variant="dark" className='goToCheckoutButton'>Terminar la compra</Button>
        </Link>
    </Container >

}

export default Cart;
