import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap';
import ItemDetail, { cardItem }  from './ItemDetail';


const getItem = new Promise((res, rej) => {
    setTimeout(() => {
        res(cardItem)
    }, 2000);
});

const ItemDetailContainer = () => {

    const [cardItem, setCardItem] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItem
            .then(res => {
                setCardItem(res)
            })
            .finally(() => setLoading(false))
    },[]);


    return (
        <div>
        {
            loading 
            ? 
                <div style={{ textAlign: "center" }}><Spinner color="primary" size="">.</Spinner></div>
            : 
                <ItemDetail item={cardItem}/>
        }
        </div>
    )
}

export default ItemDetailContainer;
