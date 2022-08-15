// RemoveButton - Handle removing from cart using context
// BS imports
import Button from 'react-bootstrap/Button';
// React imports
import { useContext } from 'react';
// CartContext import
import { CartContext } from '../../../context/CartContext';
// Styling
import "./ClearCartButton.css";


const ClearCartButton = () => {

    const {cleanCart} = useContext(CartContext);

    const clickHandler = () =>{
        cleanCart();
    }

     return <>
         <Button className="clearCartButton" onClick={clickHandler} variant="danger">Limpiar</Button>
     </> 
    }

export default ClearCartButton;