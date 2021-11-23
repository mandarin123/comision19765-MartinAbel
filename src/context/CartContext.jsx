import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const [cartTotal, setCartTotal] = useState();

    const [counter, setCounter] = useState(0);    

    const isInCart = (item) => {
        return cartList.some(prod => prod.id === item.id)
    };

    const addCartItem = (item, counter) => {
        if(isInCart(item, counter)){
            let newCartList = cartList;
            newCartList.forEach((cartItem) => {
                if(cartItem.id === item.id){
                    cartItem.counter += item.counter
                }
            });
            setCartList(newCartList);
        }else{
            setCartList( [...cartList, item, counter] )
        }
    };

    const addCartTotal = () => {
        setCartTotal(counter + counter);
    };

    const deleteCartItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
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
            addCartTotal,
            counter,
            setCounter
        }}>
           {children} 
        </CartContext.Provider>
    )
};

export default CartContextProvider