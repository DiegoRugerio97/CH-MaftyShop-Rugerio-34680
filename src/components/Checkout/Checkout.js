// Checkout component - Renders form with inputs to ask for user information, displays cart summary and manages uploading orders to Firebase.
// BS imports
import Container from 'react-bootstrap/Container';
// Context
import { CartContext } from "../../context/CartContext";
// React imports
import { useContext, useState } from "react";
// Components imports
import ContinueBrowsing from "../Cart/ContinueBrowsing/ContinueBrowsing";
import CheckoutForm from './CheckoutForm/CheckoutForm';
// Firebase function
import { createOrderFirebase, updateProductStock } from '../../util/firebaseFetch';

const Checkout = () => {

    const { cart, cartTotal, cartQuantity } = useContext(CartContext);
    const [orderID, setOrderID] = useState();

    const onSubmitClientData = (data) => {
        createOrderFirebase(data, cart, cartTotal)
            .then(({ id }) => setOrderID(id))
            .catch(e => console.log(e));
        cart.forEach((cartItem) => {
            updateProductStock(cartItem, "productos");
        })
    }

    if (cartQuantity !== 0) {
        return <Container>
            <CheckoutForm onSubmitClientData={onSubmitClientData} />
            {orderID && <h1>{orderID}</h1>}
        </Container>
    }
    return <Container>
        <ContinueBrowsing />
    </Container>

}

export default Checkout;