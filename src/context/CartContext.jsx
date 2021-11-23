import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const [counter, setCounter] = useState(0);  
    
    const [cantidadAgregar, setcantidadAgregar]=useState(0);
    const [cantTotal, setcantTotal]=useState(0);
    const [total, setTotal]=useState(0);



    const isInCart = (id) => {
        return cartList.find(prod => prod.id === id)
    };

    const addCartItem = (item) =>{
        
        console.log('additem')
        let Item=isInCart(parseInt(item.id))
        if (Item)
        {   
            let cantAgregar= parseInt(Item.cantidad) + parseInt(item.cantidad)
            setcantidadAgregar(cantAgregar)
            if (cantAgregar > item.stock)
             {
                 alert('No hay Stock para la cantidad ingresada')   
             }  
             else
             {
                Item.cantidad=cantAgregar
                setTotal(total +(item.cantidad * item.price))
                setcantTotal(cantTotal + item.cantidad)
             }
        }
        else
        {
                setCartList([...cartList, item])
                setTotal(total + (item.cantidad * item.price))
                setcantTotal(cantTotal + item.cantidad)
        }
 
    }

    /* const addCartItem = (item, counter) => {
        if(isInCart(item, counter)){
            let newCartList = cartList;
            newCartList.forEach((cartItem) => {
                if(cartItem.id === item.id){
                    cartItem.counter += item.counter
                }
            });
            setCartList(newCartList);
        }else{
            setCartList( [item, counter] )
        }
    }; */

    const deleteCartItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
    };

    const deleteCart = () => {
        setCartList([])
    };

    const totalPrice = (item) => {
        return counter * parseInt(item.price)
    };

    console.log("totalPrice",totalPrice)
    
    return (
        <CartContext.Provider value={{
            cartList,
            addCartItem,
            deleteCart,
            deleteCartItem,
            counter,
            setCounter,
            totalPrice,
            cantTotal,
            total
        }}>
           {children} 
        </CartContext.Provider>
    )
};

export default CartContextProvider