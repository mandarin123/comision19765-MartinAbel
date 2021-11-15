import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const addCartItem = (item) => {
        setCartList( [...cartList, item] )
    };

    const deleteCart = () => {
        setCartList([])
    };

    /* const deleteCartItem = () => {
        setCartList([])
    }; */

    return (
        <CartContext.Provider value={{
            cartList,
            addCartItem,
            deleteCart
        }}>
           {children} 
        </CartContext.Provider>
    )
};

export default CartContextProvider