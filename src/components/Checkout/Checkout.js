// Checkout component - Renders form with inputs to ask for user information, displays cart summary and manages uploading orders to Firebase.
// BS imports
import Container from 'react-bootstrap/Container';
// Context
import { CartContext } from "../../context/CartContext";
// React imports
import { useContext } from "react";
// Components imports
import ContinueBrowsing from "../Cart/ContinueBrowsing/ContinueBrowsing";

const Checkout = () => {

    const { cart, cartTotal, cartQuantity } = useContext(CartContext);

    return <Container>
        {!cartQuantity && <ContinueBrowsing/>}
    </Container>
}

export default Checkout;