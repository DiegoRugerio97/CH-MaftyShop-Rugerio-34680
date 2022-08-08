// Cart component - Display items in CartContext
// Styling
import "./Cart.css";
// Context
import { CartContext } from "../../context/CartContext";
// React imports
import { useContext } from "react";
// BS imports
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
// Components 
import CartItem from "./CartItem/CartItem";



const Cart = () => {

    const { cart } = useContext(CartContext);

    const itemRows = cart.map(itemInCart => {
        return <CartItem key={itemInCart.itemID} itemImg={itemInCart.itemImg} itemName={itemInCart.itemName} itemPrice={itemInCart.itemPrice} quantity={itemInCart.quantity} itemTotal={itemInCart.itemTotal} />
    }
    );

    return <Container>
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Nombre</th>
                    <th>Precio Unitario</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
            {itemRows}
            </tbody>
        </Table>
    </Container>

}

export default Cart;
