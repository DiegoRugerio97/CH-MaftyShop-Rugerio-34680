// CartItem - Render all CartItems
// BS imports
import Table from 'react-bootstrap/Table';
// Component Imports
import CartItem from "../CartItem/CartItem";
import ClearCartButton from "../ClearCartButton/ClearCartButton";
// Styling
import "./CartTable.css"

const CartTable = ({ cart, cartTotal, cartQuantity}) => {

    const itemRows = cart.map(itemInCart => {
        return <CartItem key={itemInCart.itemID} itemID={itemInCart.itemID} itemImg={itemInCart.itemImg} itemName={itemInCart.itemName} itemPrice={itemInCart.itemPrice} quantity={itemInCart.quantity} itemTotal={itemInCart.itemTotal} />
    }
    );

    const formatedTotal = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(cartTotal);

    return <>
        <Table className='cartTable' bordered hover responsive>
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
            <tr>
                <th>Total</th>
                <th> </th>
                <th></th>
                <th>{cartQuantity}</th>
                <th>{formatedTotal}</th>
                <th className='cartItemContainer'><ClearCartButton /></th>
            </tr>
        </Table>
    </>
}

export default CartTable;