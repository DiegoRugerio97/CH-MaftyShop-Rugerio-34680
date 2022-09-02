// ItemDetailContainer component - Holds ItemDetail component and fetchs specific item by id.
// React Imports
import React from "react";
import { useEffect, useState } from "react";
// React router imports
import { Link, useParams } from 'react-router-dom';
// ItemDetail component
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingSpinner from "../../util/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../util/ErrorPage/ErrorPage";
// BS Imports
import Container from 'react-bootstrap/Container';
// Styling
import "./ItemDetailContainer.css";
// Utility function
import { getProductFirebase } from "../../../util/firebaseFetch";


const ItemDetailContainer = () => {
    // States
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Router
    const { itemID } = useParams();

    const loadingFailed = (err) => {
        setError(err);
    }

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        getProductFirebase("productos", itemID).then(doc => {
            if (!doc.exists()) {
                return Promise.reject(`No existe el ID de producto ${itemID}`);
            }
            setItem({ itemID: doc.id, ...doc.data() });
        })
            .catch(err => loadingFailed(err))
            .finally(() => setIsLoading(false));
    }, [itemID]);

    const backButtonLink = `/category/${item.itemCategory}`;

    if (!error) {
        return <>
            <Container fluid className="itemDetailContainer">
                <div className="backButtonContainer">
                    <button className="backButton">
                        <Link className="backLink" to={backButtonLink}> <i className="fa-solid fa-angle-left" /></Link>
                    </button>
                </div>
                {isLoading && <LoadingSpinner text={"Cargando producto..."} />}
                {!isLoading && !error && <ItemDetail itemID={itemID} itemName={item.itemName} itemImg={item.itemImg} itemStock={item.itemStock} itemLongDescription={item.itemLongDescription} itemPrice={item.itemPrice} />}
            </Container>
        </>
    }
    return <ErrorPage errorMessage={error}/>;
}

export default ItemDetailContainer;