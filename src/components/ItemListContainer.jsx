import React, { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import ItemList from './ItemList';
import { useParams } from 'react-router';
import { getFiresore } from '../service/getFirestone';
import '../App.css';
 
const spinnerStyle = {
    textAlign: "center",
}

function ItemListContainer() {    

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
    const { categoryID } = useParams();
    
    useEffect(() => {
        
        const dbQuery = getFiresore();     
        
        if(categoryID){
            dbQuery.collection('products').where('categoria', '==', categoryID ).get()
                .then(data => setProducts( data.docs.map(pro => ( { id: pro.id, ...pro.data() } ) )))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }else{
            dbQuery.collection('products').get()
                .then(data => setProducts( data.docs.map(pro => ( { id: pro.id, ...pro.data() } ) )))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    },[categoryID]);
 
    return (
        <>
            {
                loading 
                ? 
                <div style={spinnerStyle}><Spinner color="primary" size=""> </Spinner></div>
                : 
                <ItemList products={products} />
            }
            
        </>
    )
}


export default ItemListContainer