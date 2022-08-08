import { createContext, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(item => item.id === id);
    };

    const cleanCart = () => {
        setCart([]);
    };

    const addToCart = (item) =>{
        if(isInCart){
            console.log("In cart already!");
            console.log(item);
        }
        else{
            setCart(prevState => [...prevState,item]);
        }
    };

    const removeFromCart = (id) => {
        const filteredCart = cart.filter(item => item.id !== id);
        setCart(filteredCart);
    };

    return <CartContext.Provider value={{cart, cartQuantity: cart.length, isInCart, cleanCart, addToCart, removeFromCart}}>
        {children}
    </CartContext.Provider>


}

export default CartProvider;