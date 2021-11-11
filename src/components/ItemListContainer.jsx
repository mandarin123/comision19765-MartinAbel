import React, { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import '../App.css';
import ItemList from './ItemList';
import { products } from './Products';
import { useParams } from 'react-router';
 

const getProducts = new Promise((res) => {
    setTimeout(() => {
        res(products)
    }, 2000);
});

const spinnerStyle = {
    textAlign: "center",
}

function ItemListContainer() {    

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryID } = useParams();

    useEffect(() => {
        if (categoryID) {
            getProducts
            .then(res => {
                setProducts(res.filter(prod => prod.categoria === categoryID))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            getProducts
            .then(res => {
                setProducts(res)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false)) 
        };
    },[categoryID]);


    return (
        <>
            {
                loading 
                ? 
                <div style={spinnerStyle}><Spinner color="primary" size=""> </Spinner></div>
                : 
                <ItemList products={products}/>
            }
            
        </>
    )
}

export default ItemListContainer

