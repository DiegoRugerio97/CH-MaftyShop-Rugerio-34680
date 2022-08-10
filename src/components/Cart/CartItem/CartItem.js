// CartItem component - render each cart item in cart in CartContext
// Styling
import "./CartItem.css";

const CartItem = ({itemID, itemImg, itemName, itemPrice, quantity, itemTotal}) => {

    return <tr>
        <td><img className="cartImg" src={itemImg} alt={itemName}/></td>
        <td>{itemName}</td>
        <td>{itemPrice}</td>
        <td>{quantity}</td>
        <td>{itemTotal}</td>
    </tr>

}

export default CartItem;