//ContinueBrowsing component Renders where there are no items in cart
// Styling
import "./ContinueBrowsing.css";
// GIF
import gundamGIF from "../../../img/img1.webp";
// Custom imports
import CatalogButton from '../../util/CatalogButton/CatalogButton';

const ContinueBrowsing = () => {
    return <div className="continueBrowsing-container">
        <h1 className='continueBrowsing-title'>¡No hay nada en el carrito!</h1>
        <img src={gundamGIF} alt='Transforming MS' className='continueBrowsing-img'/>
        <h2 className='continueBrowsing-subtitle'>Busca en la tienda</h2>
        <CatalogButton/>
    </div>
}

export default ContinueBrowsing;