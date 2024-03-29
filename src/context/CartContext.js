// CartContext and CartProvider - CartContext for managing the cart array of items, with helper functions.
// CartProvider for custom provicer implemented in App
import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {

    // Cart State
    const [cart, setCart] = useState([]);

    // Context functions
    const isInCart = (id) => {
        return cart.find(item => item.itemID === id);
    };

    const cleanCart = () => {
        setCart([]);
    };

    const addToCart = (itemID, quantity, itemName, itemImg, itemPrice) => {
        const itemInCart = isInCart(itemID);
        if (itemInCart) {
            const updatedCart = cart;
            const cartIndex = findItemIndex(itemID);
            updatedCart[cartIndex].quantity += quantity;
            updatedCart[cartIndex].itemTotal += parseFloat(itemPrice) * quantity;
            setCart([...updatedCart]);
        }
        else {
            setCart(prevState => [{ itemID, itemName, itemImg, itemPrice, quantity, itemTotal: parseFloat(itemPrice) * quantity }, ...prevState]);
        }
    };

    const removeFromCart = (id) => {
        const updatedCart = cart;
        const filteredCart = updatedCart.filter(item => item.itemID !== id);
        setCart([...filteredCart]);
    };
    // Helper functions
    const findItemIndex = id => {
        return cart.findIndex(item => item.itemID === id);
    }

    const calculateCartItems = () => {
        const cartQuantities = cart.map((item) => item.quantity);
        const ZERO = 0;
        return cartQuantities.reduce((previousValue, currentValue) => previousValue + currentValue, ZERO);
    }

    const calculateCartTotal = () => {
        const cartTotals = cart.map((item) => item.itemTotal);
        const ZERO = 0;
        return cartTotals.reduce((previousValue, currentValue) => previousValue + currentValue, ZERO)
    }

    const findItemQuantity = (itemID) => {
        const itemInCart = isInCart(itemID);
        if (itemInCart) {
            const cartItem = cart.find(item => item.itemID === itemID);
            return cartItem.quantity;
        }
        return 0;

    }

    return <CartContext.Provider value={{
        cart, cartQuantity: calculateCartItems(), cartTotal: calculateCartTotal(), isInCart, cleanCart, addToCart, removeFromCart, findItemQuantity
    }}>
        {children}
    </CartContext.Provider >


}

export default CartProvider;