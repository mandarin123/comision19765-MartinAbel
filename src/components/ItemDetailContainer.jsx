import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Spinner } from 'reactstrap';
import { CartContext } from '../context/CartContext';
import { getFiresore } from '../service/getFirestone';
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

    const [products, setProducts] = useState([]);
    
    const { prodID } = useParams(); 

    const [productAdded, setProductAdded] = useState(false);

    const { addCartItem, addCartTotal, counter, setCounter } = useContext(CartContext);

    const addProducts = () => {
        setCounter(counter + 1); 
    };
    
    const subtractProduct = () => {
        setCounter(counter - 1);
    };
    
    const onAdd = () => {
        counter > initial ? setProductAdded(true)  : alert(`No se puede agregar ${counter} de ${item.title} al carrito`);
        addCartItem(item, counter);
        addCartTotal(counter);
    };

    useEffect(() => {
        
        const dbQuery = getFiresore(); //conexion con firestore (base de datos)
        

        /* dbQuery.collection('products').doc('27Vak1etNlFCuRXRILMU').get() //trae un solo item con el doc.('id')
        .then(resp => setProd( { id: resp.id, ...resp.data() } )) */
        //dbQuery.collection('products').where('categoria', '==', 'pasteleria').get() //trae por categoria en donde dice.where('categoria')


        if(prodID){
            dbQuery.collection('products').doc(prodID).get()
                .then(data => setProducts( data.docs.map(pro => ( { id: pro.id, ...pro.data() } ) )))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
        },[prodID]);

    /* useEffect(() => {
        if(prodID){
            getItem
                .then(res => {
                    setItem(res.find(x => x.id === parseInt(prodID)))
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    },[prodID]); */

    
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
