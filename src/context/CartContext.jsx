import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const [cartTotal, setCartTotal] = useState();
    

    const isInCart = (item) => {
        return cartList.some(prod => prod.id === item.id)
    };

    const addCartItem = (item, counter) => {
        if(isInCart(item)){
            let newCartList = cartList;
            newCartList.forEach((cartItem) => {
                if(cartItem.id === item.id){
                    cartItem.counter += counter
                }
            });
            setCartList(newCartList);
        }else{
            setCartList( [...cartList, item] )
        }
    };

    const addCartTotal = (item) => {
        setCartTotal(item.counter + 1);
    };

    const deleteCartItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
        console.log(cartList)
    };

    const deleteCart = () => {
        setCartList([])
    };
    

    return (
        <CartContext.Provider value={{
            cartList,
            addCartItem,
            deleteCart,
            deleteCartItem,
            addCartTotal
        }}>
           {children} 
        </CartContext.Provider>
    )
};

export default CartContextProvider