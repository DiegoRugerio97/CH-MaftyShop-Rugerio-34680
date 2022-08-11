//ContinueBrowsing component Renders where there are no items in cart
// BS imports
import Button from 'react-bootstrap/Button';
// React router imports
import { Link } from "react-router-dom";
// Styling
import "./ContinueBrowsing.css";
// GIF
import gundamGIF from "../../../img/img1.webp";

const ContinueBrowsing = () => {
    return <div className="continueBrowsingContainer">
        <h1 className='continueBrowsing-title'>¡No hay nada en el carrito!</h1>
        <img src={gundamGIF} alt='Transforming MS' className='continueBrowsing-img'/>
        <h2 className='continueBrowsing-subtitle'>Busca en la tienda</h2>
        <Link to={"/"}><Button variant="dark" className=' continueBrowsing-btn'>Catálogo</Button></Link>
    </div>
}

export default ContinueBrowsing;