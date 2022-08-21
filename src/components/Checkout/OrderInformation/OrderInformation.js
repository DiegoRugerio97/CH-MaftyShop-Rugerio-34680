// OrderInformation component - Renders orderID
// BS imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// Styling
import "./OrderInformation.css";
// React router imports
import { Link } from "react-router-dom";

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
        <Link className="continueBrowsingLink" to={"/"}><Button className=' continueBrowsing-btn'>Catálogo</Button></Link>
    </>
}

export default OrderInformation;