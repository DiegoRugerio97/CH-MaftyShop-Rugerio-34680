// ErrorPage component - Appears when trying to access inexistent ID, category or when Firebase fetch fails.
import Button from 'react-bootstrap/Button';
// React router imports
import { Link } from "react-router-dom";
// Styling
import "./ErrorPage.css";
// GIF
import errorGif from "../../../img/error.gif";

const ErrorPage = ({ errorMessage }) => {
    return <div className="continueBrowsingContainer">
        <h1 className='continueBrowsing-title'>Oops! Parece que hubo un error!</h1>
        <img src={errorGif} alt='Transforming MS' className='continueBrowsing-img' />
        <h2 className='continueBrowsing-subtitle'>{`Error: ${errorMessage}`}</h2>
        <Link to={"/"}><Button variant="dark" className='continueBrowsing-btn'>Catálogo</Button></Link>
    </div>
}

export default ErrorPage;