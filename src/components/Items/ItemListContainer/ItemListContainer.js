// ItemListContainer component - Render ItemList component and fetch all products from DB
// Styling
import "./ItemListContainer.css";
// BS components
import Container from 'react-bootstrap/Container';
// Custom components
import ItemList from "../ItemList/ItemList";
import LoadingSpinner from "../../util/LoadingSpinner/LoadingSpinner";
// React imports
import React from "react";
import { useEffect, useState } from "react";

const ItemListContainer = () => {

    const PRODUCTS_URL = "https://mafty-shop-default-rtdb.firebaseio.com/productos.json";

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const loadItems = (data) => {
        setItems(data);
        setIsLoading(false);
    }

    const loadingFailed = (err) => {
        setIsLoading(false);
        setError(true);
        console.log(err);
    }

    useEffect(() => {
        setIsLoading(true);
        fetch(PRODUCTS_URL).then(response => response.ok ? response.json() : Promise.reject("Error al cargar datos."))
            .then(data => loadItems(data))
            .catch(err => loadingFailed(err));
    }, []);


    return <Container>
        {isLoading &&
            <LoadingSpinner text={"Cargando productos..."}/>
        }
        {error && <h1>Hubo un error</h1>}
        {!isLoading && !error && <ItemList itemsList={items} />}
    </Container>;
}

export default ItemListContainer;