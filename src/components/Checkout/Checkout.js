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
import LoadingSpinner from '../util/LoadingSpinner/LoadingSpinner';
// Firebase function
import { createOrderFirebase, updateProductStock } from '../../util/firebaseFetch';

const Checkout = () => {

    const { cart, cartTotal, cartQuantity, cleanCart } = useContext(CartContext);
    const [orderID, setOrderID] = useState();
    const [isCreating, setIsCreating] = useState(false);

    const onSubmitClientData = (data) => {
        setIsCreating(true);
        createOrderFirebase(data, cart, cartTotal)
            .then(({ id }) => setOrderID(id))
            .then(() => {
                setIsCreating(false);
                cleanCart();
            })
            .catch(e => console.log(e));
        cart.forEach((cartItem) => {
            updateProductStock(cartItem, "productos");
        });
    }

    if (cartQuantity !== 0 && !isCreating && !orderID) {
        return <Container>
            <CheckoutForm onSubmitClientData={onSubmitClientData} />
        </Container>
    }

    if (isCreating) {
        return <Container>
            <LoadingSpinner text="Estamos creando tu ordén..." />
        </Container>
    }

    if (!isCreating && orderID) {
        return <Container>
            <h1>{orderID}</h1>
        </Container>
    }

    return <Container>
        <ContinueBrowsing />
    </Container>

}

export default Checkout;