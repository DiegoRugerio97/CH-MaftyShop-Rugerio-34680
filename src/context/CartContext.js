import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({children}) =>{

    // Cart State
    const [cart, setCart] = useState([]);

    // Cotnext functions
    const isInCart = (id) => {
        return cart.find(item => item.itemID === id);
    };

    const cleanCart = () => {
        setCart([]);
    };

    const addToCart = (itemID, quantity, itemName, itemImg, itemPrice) =>{
        const itemInCart = isInCart(itemID);
        if(itemInCart){
            const updatedCart = cart;
            const cartIndex = findItemIndex(itemID);
            updatedCart[cartIndex].quantity += quantity;
            updatedCart[cartIndex].itemTotal = parseFloat(itemPrice) * updatedCart[cartIndex].quantity;
            setCart(updatedCart);
        }
        else{
            setCart(prevState => [{itemID, itemName, itemImg, itemPrice, quantity, itemTotal: parseFloat(itemPrice) * quantity}, ...prevState])
        }
    };

    const removeFromCart = (id) => {
        const filteredCart = cart.filter(item => item.id !== id);
        setCart(filteredCart);
    };
    // Helper functions
    const findItemIndex = id =>{
        return cart.findIndex(item => item.itemID === id);
    }

    return <CartContext.Provider value={{cart, cartQuantity: cart.length, isInCart, cleanCart, addToCart, removeFromCart}}>
        {children}
    </CartContext.Provider>


}

export default CartProvider;