import './NavBar.css';
import logo from '../../img/Mafty.png';

const NavBar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light sticky-top">
            <img src={logo} alt="Logo de Mafty Shop"/>
            <a class="navbar-brand" href="../../index.html">Mafty Shop</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="../../index.html">¿Quienes somos?<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../../index.html">Figuras</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../../index.html">Gundam</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../../index.html">Manga</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button class="btn my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>);

}

export default NavBar;