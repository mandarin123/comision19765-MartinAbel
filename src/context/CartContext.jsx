import { createContext, useRef, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const [total, setTotal] = useState(0);

    const [counter, setCounter] = useState(0);  

    const [totalCart, setTotalCart] = useState(0);
    // const cartListRef = useRef(cartList);
    // const totalRef = useRef(total);
    // const counterRef = useRef(counter);


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
        // updateState(0, totalCart + counter, itemToAdd);
    };

    const deleteCartItem = (id, prod) => {
        let item = cartList.find(x => x.id === id);
        setCartList(cartList.filter(item => item.id !== id));
        setTotalCart(totalCart - item.counter);
        setCounter(0);
        totalPrice();
    };

    const deleteCart = () => {
        setCartList([]);
        setTotalCart(0);
        setTotal(0);
    };

    const totalPrice = () => {
        let acum = 0;
        //hola profe, por que no me mantiene el valor del coso?
        //usted dirá "pero que coso?"
        if (cartList.length > 0) {// <= este coso
              cartList.forEach(prod => {
               acum += (prod.price * prod.counter);
          });
        }
        return setTotal(acum);
    };

    // const updateState = (newCounterState, newTotalState, newCartListState) => {
    //      totalRef.current = newTotalState;
    //      setTotal(newTotalState);
         
    //      counterRef.current = newCounterState; 
    //      setCounter(newCounterState)

    //      cartListRef.current = newCartListState; 
    //      setCartList(newCartListState)    
    //     };
    
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
            total
        }}>
           {children} 
        </CartContext.Provider>
    )
};

export default CartContextProvider