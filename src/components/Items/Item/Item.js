// Item Component - Render an individual Item
// BS imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// Styling
import "./Item.css";
// React Router imports
import { Link } from 'react-router-dom';

const Item = ({ itemImg, itemName, itemDescription, itemStock, itemID }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={itemImg} />
            <Card.Body>
                <Card.Title>{itemName}</Card.Title>
                <Card.Text>
                    {itemDescription}
                </Card.Text>
                <Card.Text>
                    Stock del producto: {itemStock}
                </Card.Text>
            </Card.Body>
            <Link className='itemLink' to={`/item/${itemID}`}> <Button className='itemBtn' variant="dark">Detalles del producto</Button></Link>
        </Card>
    );
}

export default Item;