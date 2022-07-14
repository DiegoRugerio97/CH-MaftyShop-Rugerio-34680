// Componente NavBar
// Estilos
// Propios y modificaciones de BS
import './NavBar.css';
// Se importa el logo desde dir de imagenes
import logo from '../../img/Mafty.png';

// Cart
import CartWidget from '../CartWidget/CartWidget.js';

const NavBar = () => {
    // Navbar colapsable responsive del BS
    return (
        <nav className="navbar navbar-expand-lg sticky-top nav navbar-dark">
            <img className='navLogo' src={logo} alt="Logo de Mafty Shop" />
            <a className="navbar-brand" href="../../index.html">Mafty Shop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="../../index.html">¿Quiénes somos?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../../index.html">Figuras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../../index.html">Gundam</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../../index.html">Manga</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass" /></span>
                        </div>
                        <input type="text" className="form-control" />
                    </div>
                </form>
                <CartWidget/>
            </div>
        </nav>);

}

export default NavBar;