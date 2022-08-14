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
import { getItems } from "../../../util/firebaseFetch";
// Firestore
import { collection, getDocs ,getFirestore  } from "firebase/firestore";


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
        // Firebase
        const db = getFirestore();
        const productCollectionRef = collection(db, "productos");
        getDocs(productCollectionRef).then(snapshot => 
            {
                setItems(snapshot.docs.map(doc => ({itemID: doc.id, ...doc.data() })));
            })
            .catch(err => loadingFailed(err))
            .finally(setIsLoading(false));
        

        // getItems()
        //     .then(data => {
        //         if (categoryName) {
        //             const filteredItems = data.filter((item) => item.itemCategory === categoryName);
        //             setItems(filteredItems);
        //         }
        //         else{
        //             setItems(data);
        //         }
        //         setIsLoading(false);
        //     })
        //     .catch(err => loadingFailed(err));

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