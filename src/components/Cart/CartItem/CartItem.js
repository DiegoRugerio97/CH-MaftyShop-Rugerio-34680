// CartItem component - render each cart item in cart in CartContext
// Styling
import RemoveButton from "../RemoveButton/RemoveButton";
import "./CartItem.css";

const CartItem = ({itemID, itemImg, itemName, itemPrice, quantity, itemTotal}) => {

    const formatedPrice = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(itemPrice);
    const formatedTotal = Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(itemTotal);

    return <tr>
        <td><img className="cartItem-img" src={itemImg} alt={itemName}/></td>
        <td className="cartItem-container"><p className="cartItem-detail">{itemName}</p></td>
        <td className="cartItem-container"><p className="cartItem-detail">{formatedPrice}</p></td>
        <td className="cartItem-container"><p className="cartItem-detail">{quantity}</p></td>
        <td className="cartItem-container"><p className="cartItem-detail">{formatedTotal}</p></td>
        <td className="cartItem-container"><RemoveButton removeID={itemID}/></td>
    </tr>

}

export default CartItem;