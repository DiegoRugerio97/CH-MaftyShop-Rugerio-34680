// BS imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import "./Item.css";


const Item = props => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.itemImg} />
            <Card.Body>
                <Card.Title>{props.itemName}</Card.Title>
                <Card.Text>
                    {props.itemDescription}
                </Card.Text>
                <Card.Text>
                    Stock del producto: {props.itemStock}
                </Card.Text>
            </Card.Body>
            <Button className='itemBtn' variant="dark">Detalles del producto</Button>
        </Card>
    );
}

export default Item;