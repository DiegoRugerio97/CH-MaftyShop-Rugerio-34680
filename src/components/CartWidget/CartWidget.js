// Cart Component - Open Cart and track added items
import "./CartWidget.css";
// BS Imports
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const CartWidget = ({itemCount}) => {
    
    return <>
        <Button variant="dark" className="position-relative">
            <i className="fa-solid fa-cart-shopping"/>
            <Badge className="position-absolute" bg="dark">{itemCount | 0}</Badge>
        </Button>
    </>;
}

export default CartWidget;