// CartItem - Render all CartItems
// BS imports
import Table from 'react-bootstrap/Table';
// Component Imports
import CartItem from "../CartItem/CartItem";

const CartTable = ({ cart }) => {

    const itemRows = cart.map(itemInCart => {
        return <CartItem key={itemInCart.itemID} itemID={itemInCart.itemID} itemImg={itemInCart.itemImg} itemName={itemInCart.itemName} itemPrice={itemInCart.itemPrice} quantity={itemInCart.quantity} itemTotal={itemInCart.itemTotal} />
    }
    );

    return <>
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Nombre</th>
                    <th>Precio Unitario</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Eliminar producto</th>
                </tr>
            </thead>
            <tbody>
                {itemRows}
            </tbody>
        </Table>
    </>
}

export default CartTable;