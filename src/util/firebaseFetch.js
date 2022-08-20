// Using firebase package
// Firestore
import { doc, getDoc, getFirestore, collection, getDocs, query, where, addDoc } from "firebase/firestore";
// GET
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


// POST
export const createOrderFirebase = (clientData, cartData, cartTotal) => {
    const order = {
        clientData: clientData,
        cartData: cartData,
        orderDate: createOrderDate(),
        cartTotal: cartTotal
    }
    const db = getFirestore();
    const ordersCollectionRef = collection(db, "orders");
    return addDoc(ordersCollectionRef, order);
}


// Helper Functions
const createOrderDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return Date.now().toLocaleString(undefined, options);
}
