// Componente Cart


//Badge del BS
const CartWidget = () => {

    let cantidadProductos = 15;

    return <>
        <button type="button" className="btn btn-dark position-relative">
        <i class="fa-solid fa-cart-shopping iconCart"></i>
            <span className="position-absolute badge rounded-pill bg-dark">
                {cantidadProductos}
            </span>
        </button>
    </>;
}

export default CartWidget;