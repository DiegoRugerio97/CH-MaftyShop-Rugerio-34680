
// Styling
import './NavBar.css';
// Logo image import
import logo from '../../img/Mafty.png';
// CartWidget component import
import CartWidget from '../CartWidget/CartWidget.js';

// BS components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



const NavBar = (props) => {
    // react-BS navbar
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top navLogo"
                    />{" "}
                    Mafty Shop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">¿Quiénes somos?</Nav.Link>
                        <Nav.Link href="#link">Figuras</Nav.Link>
                        <Nav.Link href="#link">Gundam</Nav.Link>
                        <Nav.Link href="#link">Manga</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <InputGroup className='d-flex'>
                            <InputGroup.Text id="btnGroupAddon2"><i className="fa-solid fa-magnifying-glass" /></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Buscar"
                            />
                        </InputGroup>
                    </Form>
                    {/* Implementation of CartWidget component with Items in Cart prop */}
                    <CartWidget cantidadProductos={props.itemsInCart} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavBar;