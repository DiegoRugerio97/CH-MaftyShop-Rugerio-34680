
// ItemCount Component
import ItemCount from "../ItemCount/ItemCount";
// Styling
import "./ItemListContainer.css";

// BS imports
import Card from 'react-bootstrap/Card';


const ItemListContainer = (props) => {

    return <>
        <h1 className="msj">{props.greeting}</h1>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Test para Item Count</Card.Title>
                <Card.Text>
                    Prueba para componente ItemCount para el detalle del producto.
                    <br/>
                    Se actualiza el stock al ejecutar onAdd y esta validado para evitar inputs de texto, asi como negativos y mayores al stock.
                </Card.Text>
                <ItemCount stock={props.stock} initial={1} onAdd={props.onAdd} />
            </Card.Body>
        </Card>

    </>;
}

export default ItemListContainer;