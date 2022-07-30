// ItemDetailContainer component - Holds ItemDetail component and fetchs specific item by id.
// React Imports
import { useEffect, useState } from "react";
// ItemDetail component
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = ({id}) =>{

    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const PRODUCT_URL = `https://mafty-shop-default-rtdb.firebaseio.com/productos.json/${id}`;

    const loadItem = (item) => {
        setItem(item);
        setIsLoading(false);
    }

    const loadingFailed = (err) => {
        setIsLoading(false);
        setError(true);
        console.log(err);
    }

    useEffect(() => {
        setIsLoading(true);
        fetch(PRODUCT_URL).then(response => response.ok ? response.json() : Promise.reject("Error al cargar producto."))
            .then(data => loadItem(data))
            .catch(err => loadingFailed(err));
    }, []);



    return <>
        {isLoading && <h1>Cargando...</h1>}
        {!isLoading && !error && <ItemDetail item = {item}/>}
    </>
}

export default ItemDetailContainer;