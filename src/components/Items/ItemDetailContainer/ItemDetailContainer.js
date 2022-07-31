// ItemDetailContainer component - Holds ItemDetail component and fetchs specific item by id.
// React Imports
import React from "react";
import { useEffect, useState } from "react";
// ItemDetail component
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingSpinner from "../../util/LoadingSpinner/LoadingSpinner";
// BS Imports
import Container from 'react-bootstrap/Container';
// Styling
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ id }) => {

    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    let PRODUCT_URL = `https://mafty-shop-default-rtdb.firebaseio.com/productos/${id}.json`;

    const loadItem = (data) => {
        setItem(data);
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
    }, [PRODUCT_URL]);

    return <>
        <Container fluid className="itemDetailContainer">
            <div className="backButtonContainer">
                <button className="backButton"><i className="fa-solid fa-angle-left"/></button>
            </div>
            {isLoading && <LoadingSpinner text={"Cargando producto..."} />}
            {!isLoading && !error && <ItemDetail itemName={item.itemName} itemImg={item.itemImg} itemStock={item.itemStock} itemLongDescription={item.itemLongDescription} itemPrice={item.itemPrice} />}
        </Container>
    </>
}

export default ItemDetailContainer;