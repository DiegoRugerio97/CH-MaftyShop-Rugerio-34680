// Componente Cart
// Estilos
import "./CartWidget.css";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

//Badge del BS
// V1.0 - Se implementan props para mostrar la cantidad de productos
const CartWidget = (props) => {

    let cantidadProductos = props.cantidadProductos | 0;

    return <>
        <Button variant="dark" className="position-relative">
            <i class="fa-solid fa-cart-shopping"></i> 
            <Badge className="position-absolute" bg="dark">{cantidadProductos}</Badge>
        </Button>
    </>;
}

export default CartWidget;