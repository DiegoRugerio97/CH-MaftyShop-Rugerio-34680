// Styling
import "./ItemListContainer.css";

// BS components
import Container from 'react-bootstrap/Container';
import ItemList from "../ItemList/ItemList";

import React from "react";
import { useEffect, useState } from "react";




const ItemListContainer = (props) => {

    const productsURL = "https://mafty-shop-default-rtdb.firebaseio.com/productos.json";

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(productsURL).then(response => response.ok ? response.json() : Promise.reject("Error al cargar datos."))
            .then(data => setItems(data))
            .catch(err => console.log(err));
    }, []);

    return <Container>
        <h1 className="msj">{props.greeting}</h1>
        <ItemList items={items}/>
    </Container>;
}

export default ItemListContainer;