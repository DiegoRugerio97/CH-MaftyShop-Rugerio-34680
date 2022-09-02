// Using firebase package
// Firestore
import { doc, getDoc, getFirestore, collection, getDocs, query, where, addDoc, runTransaction } from "firebase/firestore";
// GET
export const getCollectionFirebase = (collectionName, queryExpression) => {
    const db = getFirestore();
    if (queryExpression !== undefined) {
        const queryRef = query(
            collection(db, collectionName),
            where(queryExpression.first, queryExpression.middle, queryExpression.last)
        );
        return getDocs(queryRef);
    }
    const productCollectionRef = collection(db, collectionName);
    return getDocs(productCollectionRef);
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
        cartTotal: cartTotal,
        state:"created"
    }
    const db = getFirestore();
    const ordersCollectionRef = collection(db, "orders");
    return addDoc(ordersCollectionRef, order);
}

// Update Stock via transactions
export const updateProductStock = (cartItem, collectionName) => {
    const db = getFirestore();
    const itemDocRef = doc(db, collectionName, cartItem.itemID);
    runTransaction(db, (transaction) => {
        return transaction.get(itemDocRef)
            .then((itemDoc) => {
                const newStock = itemDoc.data().itemStock - cartItem.quantity;
                if (newStock < 0) {
                    return Promise.reject(`No stock for product ${cartItem.itemName}`);
                }
                return transaction.update(itemDocRef, { itemStock: newStock })
            })
    })
}

// Helper Functions
const createOrderDate = () => {
    const now = new Date();
    const yyyy = now.getFullYear();
    let mm = now.getMonth() + 1;
    let dd = now.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy;
}


