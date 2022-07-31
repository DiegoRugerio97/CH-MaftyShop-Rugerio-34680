// ItemDetailContainer component - Holds ItemDetail component and fetchs specific item by id.
// React Imports
import React from "react";
import { useEffect, useState } from "react";
// React router imports
import { Link, useParams } from 'react-router-dom';
// ItemDetail component
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingSpinner from "../../util/LoadingSpinner/LoadingSpinner";
// BS Imports
import Container from 'react-bootstrap/Container';
// Styling
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    // States
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    // Router
    const { itemID } = useParams();

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
        const PRODUCT_URL = `https://mafty-shop-default-rtdb.firebaseio.com/productos/${itemID}.json`;
        setIsLoading(true);
        fetch(PRODUCT_URL).then(response => response.ok ? response.json() : Promise.reject("Error al cargar producto."))
            .then(data => loadItem(data))
            .catch(err => loadingFailed(err));
    }, [itemID]);

    return <>
        <Container fluid className="itemDetailContainer">
            <div className="backButtonContainer">
                <button className="backButton">
                    <Link className="backLink" to={'/'}> <i className="fa-solid fa-angle-left" /></Link>
                </button>
            </div>
            {isLoading && <LoadingSpinner text={"Cargando producto..."} />}
            {!isLoading && !error && <ItemDetail itemName={item.itemName} itemImg={item.itemImg} itemStock={item.itemStock} itemLongDescription={item.itemLongDescription} itemPrice={item.itemPrice} />}
        </Container>
    </>
}

export default ItemDetailContainer;