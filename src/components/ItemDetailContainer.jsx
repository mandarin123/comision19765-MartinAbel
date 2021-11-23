import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Spinner } from 'reactstrap';
import { CartContext } from '../context/CartContext';
import { getFiresore } from '../service/getFirestone';
import ItemDetail  from './ItemDetail';


const ItemDetailContainer = () => {

    const initial = 0;

    const [item, setItem] = useState();

    const [loading, setLoading] = useState(true);
    
    const { prodID } = useParams(); 

    const [productAdded, setProductAdded] = useState(false);

    const { addCartItem, counter, setCounter, totalPrice, totalCart, setTotalCart } = useContext(CartContext);

    const addProducts = () => {
        setCounter(counter + 1)
    };
    
    const subtractProduct = () => {
        setCounter(counter - 1);
    };
    
    const onAdd = () => {
        counter > initial ? setProductAdded(true)  : alert(`No se puede agregar ${counter} de ${item.title} al carrito`);
        addCartItem(item, counter);
        // totalPrice(counter);
    };
    

    useEffect(() => {
        
        const dbQuery = getFiresore(); //conexion con firestore (base de datos)
        const prodCollection = dbQuery.collection('products');
        const firebaseProd = prodCollection.doc(prodID);
        
        firebaseProd.get()
            .then(doc => {
                console.log(prodID)
            if (doc.exists) setItem({ id: doc.id, ...doc.data() });
            })
            .finally(() =>{
            setLoading(false);
            });
        },[prodID]);

    return (
        <div className="modals">
        {
            loading 
            ? 
                <div style={ { textAlign: "center" } }><Spinner color="primary" size="">.</Spinner></div>
            : 
                <ItemDetail 
                    item={item}
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
