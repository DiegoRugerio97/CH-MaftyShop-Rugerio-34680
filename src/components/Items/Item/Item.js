// BS imports
import Card from 'react-bootstrap/Card';

const Item = props => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {props.itemImg} />
            <Card.Body>
                <Card.Title>{props.itemName}</Card.Title>
                <Card.Text>
                    {props.itemDescription}
                </Card.Text>
                <Card.Text>
                    {props.itemStock}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Item;