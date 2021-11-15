import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Spinner } from 'reactstrap';
import ItemDetail  from './ItemDetail';
import { products } from './Products';


const getItem = new Promise((res) => {
    setTimeout(() => {
        res(products)
    }, 2000);
});

const ItemDetailContainer = ({ initial = 0, stock, product }) => {

    const [item, setItem] = useState();

    const [loading, setLoading] = useState(true);
    
    const { prodID } = useParams(); 

    const [productAdded, setProductAdded] = useState(false);

    const [counter, setCounter] = useState(initial);

    const addProducts = () => {
        counter < stock ? setCounter(counter + 1) : alert('Stock insuficiente'); 
    };
    
    const subtractProduct = () => {
        counter === initial ? setCounter(counter) : setCounter(counter - 1)
    };
    
    const onAdd = () => {
        counter > initial ? setProductAdded('true')  : alert(`No se puede agregar ${counter} de ${product} al carrito`)
    };         

    useEffect(() => {
        if(prodID){
            getItem
                .then(res => {
                    setItem(res.find(x => x.id === parseInt(prodID)))
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }else{
            getItem
                .then(res => {
                    setItem(res)
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
                />
        }
        </div>
    )
}

export default ItemDetailContainer;
