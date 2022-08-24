// CatalogButton component - Styled button to render Link to /, reused in several components.
// React router imports
import { Link } from "react-router-dom";
// BS imports
import Button from 'react-bootstrap/Button';
// Styling
import "./CatalogButton.css";

const CatalogButton = () => {
    return <Link className="catalogButton-link" to={"/"}><Button className='catalogButton-btn'>Catálogo</Button></Link>;
}

export default CatalogButton;