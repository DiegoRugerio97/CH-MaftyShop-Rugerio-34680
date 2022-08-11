// CartItem component - render each cart item in cart in CartContext
// Styling
import RemoveButton from "../RemoveButton/RemoveButton";
import "./CartItem.css";

const CartItem = ({itemID, itemImg, itemName, itemPrice, quantity, itemTotal}) => {

    const formatedPrice = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(itemPrice);
    const formatedTotal = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(itemTotal);

    return <tr>
        <td><img className="cartImg" src={itemImg} alt={itemName}/></td>
        <td className="cartItemContainer"><p className="cartItemDetail">{itemName}</p></td>
        <td className="cartItemContainer"><p className="cartItemDetail">{formatedPrice}</p></td>
        <td className="cartItemContainer"><p className="cartItemDetail">{quantity}</p></td>
        <td className="cartItemContainer"><p className="cartItemDetail">{formatedTotal}</p></td>
        <td className="cartItemContainer"><RemoveButton removeID={itemID}/></td>
    </tr>

}

export default CartItem;