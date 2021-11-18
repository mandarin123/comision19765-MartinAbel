import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Spinner } from 'reactstrap';
import { CartContext } from '../context/CartContext';
import ItemDetail  from './ItemDetail';
import { products } from './Products';


const getItem = new Promise((res) => {
    setTimeout(() => {
        res(products)
    }, 2000);
});

const ItemDetailContainer = () => {

    const initial = 0;

    const [item, setItem] = useState();

    const [loading, setLoading] = useState(true);
    
    const { prodID } = useParams(); 

    const [productAdded, setProductAdded] = useState(false);

    const [counter, setCounter] = useState(initial);

    const { addCartItem, addCartTotal } = useContext(CartContext);

    const addProducts = () => {
        setCounter(counter + 1); 
    };
    
    const subtractProduct = () => {
        setCounter(counter - 1);
    };
    
    const onAdd = () => {
        counter > initial ? setProductAdded(true)  : alert(`No se puede agregar ${counter} de ${item.title} al carrito`);
        addCartItem(item);
        addCartTotal(counter);
    };

    useEffect(() => {
        if(prodID){
            getItem
                .then(res => {
                    setItem(res.find(x => x.id === parseInt(prodID)))
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    },[prodID]);

    
    return (
        <div className="modals">
        {
            loading 
            ? 
                <div style={ { textAlign: "center" } }><Spinner color="primary" size="">.</Spinner></div>
            : 
                <ItemDetail 
                    prod={item}
                    addProducts={addProducts}
                    subtractProduct={subtractProduct}
                    onAdd={onAdd}
                    counter={counter}
                    setCounter={setCounter}
                    productAdded={productAdded}
                    setProductAdded={setProductAdded}
                    products={item}
                />
        }
        </div>
    )
}

export default ItemDetailContainer;
