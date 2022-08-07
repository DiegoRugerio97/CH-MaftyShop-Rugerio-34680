// FinishBrowsingButton - Appears when quantity is added to cart and redirects to /cart
// Styling
import "./FinishBrowsingButton.css";
// Router import
import { Link } from 'react-router-dom';

const FinishBrowsingButton = () => {
    return <>
        <Link to={'/cart'}><button type="button" className="finishButton">¡Termina tu compra!</button></Link> 
    </>
}

export default FinishBrowsingButton;