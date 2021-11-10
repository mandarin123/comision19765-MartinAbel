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

const ItemDetailContainer = () => {

    const [item, setItem] = useState();

    const [loading, setLoading] = useState(true);

    const { prodID } = useParams(); 

    
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
                <ItemDetail prod={item}/>
        }
        </div>
    )
}

export default ItemDetailContainer;
