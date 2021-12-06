import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);
    const [counter, setCounter] = useState(0);  
    const [totalCart, setTotalCart] = useState(0);

    const totalCartWidget = () => {
        setTotalCart(totalCart + counter)
    };
    
    const isInCart = (item) => {
        return cartList.some(prod => prod.id === item.id)
    };
    
    const addCartItem = (item, counter) =>{
        let itemToAdd = null;
        if(isInCart(item)){
            let newCart = cartList;
            newCart.forEach((cartItem) => {
                if(cartItem.id === item.id){
                    cartItem.counter += counter;
                }
            });
            itemToAdd = newCart;

        }else{
            itemToAdd = [...cartList, {...item, counter}];
        }
        setCartList(itemToAdd);
        setTotalCart(totalCart + counter);
        setCounter(0);
        totalPrice();
    };

    const deleteCartItem = (id, prod) => {
        let item = cartList.find(x => x.id === id);
        setCartList(cartList.filter(item => item.id !== id));
        setTotalCart(totalCart - item.counter);
        setCounter(0);
    };

    const deleteCart = () => {
        setCartList([]);
        setTotalCart(0);
    };

    const totalPrice = () => {
        return cartList.reduce((acum, valor) => (acum + (valor.counter * valor.price)), 0);
    };
  
    return (
        <CartContext.Provider value={{
            cartList,
            deleteCart,
            deleteCartItem,
            counter,
            setCounter,
            addCartItem,
            totalPrice,
            totalCartWidget,
            totalCart,
        }}>
           {children} 
        </CartContext.Provider>
    )
};

export default CartContextProvider