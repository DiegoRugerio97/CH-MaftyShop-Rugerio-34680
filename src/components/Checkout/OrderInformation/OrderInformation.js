// OrderInformation component - Renders orderID
// BS imports
import Card from 'react-bootstrap/Card';
// Styling
import "./OrderInformation.css";
// Custom imports
import CatalogButton from "../../util/CatalogButton/CatalogButton";

const OrderInformation = ({ orderID }) => {
    return <>
        <Card className='orderCard'>
            <Card.Header as="h1">¡Gracias!</Card.Header>
            <Card.Body className='orderCardText'>
                <Card.Title className='orderCardTitle'>¡Tu orden esta lista!</Card.Title>
                <Card.Text>
                    Hemos registrado tu orden exitosamente, el ID de tu orden es: {orderID}.
                </Card.Text>
            </Card.Body>
        </Card>
       <CatalogButton />
    </>
}

export default OrderInformation;