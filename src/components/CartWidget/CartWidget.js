// Componente Cart


//Badge del BS
// V1.0 - Se implementan props para mostrar la cantidad de productos
const CartWidget = (props) => {

    let cantidadProductos = props.cantidadProductos | 0;

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