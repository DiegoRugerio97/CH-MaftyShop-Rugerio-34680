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
// Routing imports
import { useParams } from "react-router-dom";
// Utility function
import { getProductsFirebase } from "../../../util/firebaseFetch";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    // Routing
    const { categoryName } = useParams();

    const loadingFailed = (err) => {
        setError(true);
        console.log(err);
    }

    useEffect(() => {
        setIsLoading(true);
        if (categoryName) {
            getProductsFirebase("productos", categoryName).then(snapshot => {
                setItems(snapshot.docs.map(doc => ({ itemID: doc.id, ...doc.data() })));
            }).catch(err => loadingFailed(err))
                .finally(setIsLoading(false));;
        }
        else {
            getProductsFirebase("productos").then(snapshot => {
                setItems(snapshot.docs.map(doc => ({ itemID: doc.id, ...doc.data() })));
            })
                .catch(err => loadingFailed(err))
                .finally(setIsLoading(false));
        }
    }, [categoryName]);

    return <Container>
        {isLoading &&
            <LoadingSpinner text={"Cargando productos..."} />
        }
        {error && <h1>Hubo un error</h1>}
        {!isLoading && !error && <ItemList itemsList={items} />}
    </Container>;
}

export default ItemListContainer;