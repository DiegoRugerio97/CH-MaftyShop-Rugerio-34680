// RemoveButton - Handle removing from cart using context
// BS imports
import Button from 'react-bootstrap/Button';
// React imports
import { useContext } from 'react';
// CartContext import
import { CartContext } from '../../../context/CartContext';
// Styling
import "./RemoveButton.css";


const RemoveButton = ({removeID}) => {

    const {removeFromCart} = useContext(CartContext);

    const clickHandler = () =>{
        removeFromCart(removeID);
    }

     return <>
         <Button className="removeButton" onClick={clickHandler} variant="danger"><i className="fa-solid fa-xmark"/></Button>
     </> 
    }

export default RemoveButton;