// NavBar component - Hold all Links and CartWidget component
// Styling
import './NavBar.css';
// Logo image import
import logo from '../../img/Mafty.png';
// CartWidget component import
import CartWidget from '../CartWidget/CartWidget';
// BS components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from 'react-bootstrap/Spinner';
// React Router imports
import { Link } from 'react-router-dom';
// React imports
import { useEffect, useState } from 'react';
// GET firebase method
import { getCollectionFirebase } from '../../util/firebaseFetch';

const NavBar = () => {

    const [menuCategories, setMenuCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getCollectionFirebase("categories")
            .then((snapshot) => {
                setMenuCategories(snapshot.docs.map((category) => ({ id: category.id, ...category.data() })));
            })
            .catch(err => setError(err))
            .finally(() => setIsLoading(false));
    }, [])

    const categoriesLinks = menuCategories.map((category) => {
        return <Link key={category.key} className='categoryLink' to={`/category/${category.key}`}>{category.description}</Link>
    });

    const placeholders =
        <>
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
        </>

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Link className='indexLink' to={'/'}> <Navbar.Brand>
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top nav-logo"
                    />{" "}
                    Mafty Shop
                </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='categoryLink' to={'/aboutUs'}>¿Quiénes somos?</Link>
                        {isLoading && placeholders}
                        {!isLoading && categoriesLinks}
                        {error && <Spinner animation="grow" variant="danger" />}
                    </Nav>
                    <Link className='indexLink' to={'/cart'}>
                        <CartWidget />
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavBar;