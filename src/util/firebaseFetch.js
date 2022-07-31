// Utility functions for fetching to firebase

const FIREBASE_URL = "https://mafty-shop-default-rtdb.firebaseio.com";

export const getItems = () =>{
    const itemsPromise = fetch(`${FIREBASE_URL}/productos.json`).then(response => response.ok ? response.json() : Promise.reject("Error al cargar datos."));
    return itemsPromise;
}

export const getItem = (category,itemID) =>{
    const itemPromise = fetch(`${FIREBASE_URL}/${category}/${itemID}.json`).then(response => response.ok ? response.json() : Promise.reject("Error al cargar producto."));
    return itemPromise;
}
