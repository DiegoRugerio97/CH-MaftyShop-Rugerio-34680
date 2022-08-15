// Using firebase package
// Firestore
import { doc, getDoc, getFirestore, collection, getDocs, query, where } from "firebase/firestore";

export const getProductsFirebase = (collectionName, queryExpression) => {
    const db = getFirestore();
    if (queryExpression !== undefined) {
        const queryRef = query(
            collection(db, collectionName),
            where("itemCategory", "==", queryExpression)
        );
        return getDocs(queryRef);
    }
    else {
        const productCollectionRef = collection(db, collectionName);
        return getDocs(productCollectionRef);
    }
}

export const getProductFirebase = (collectionName, productID) => {
    const db = getFirestore();
    const productDocRef = doc(db, collectionName, productID);
    return getDoc(productDocRef);
}

// Utility functions for fetching to firebase
// Deprecated in app, fetch using JSON
const FIREBASE_URL = "https://mafty-shop-default-rtdb.firebaseio.com";

export const getItems = () => {
    const itemsPromise = fetch(`${FIREBASE_URL}/productos.json`).then(response => response.ok ? response.json() : Promise.reject("Error al cargar datos."));
    return itemsPromise;
}

export const getItem = (category, itemID) => {
    const itemPromise = fetch(`${FIREBASE_URL}/${category}/${itemID}.json`).then(response => response.ok ? response.json() : Promise.reject("Error al cargar producto."));
    return itemPromise;
}

