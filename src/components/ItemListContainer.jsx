import React, { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import '../App.css';
import ItemList from './ItemList';
import { useParams } from 'react-router';
import { getFiresore } from '../service/getFirestone';
 
const spinnerStyle = {
    textAlign: "center",
}

function ItemListContainer() {    

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
    const { categoryID } = useParams();
    
    useEffect(() => {
        
        const dbQuery = getFiresore(); //conexion con firestore (base de datos)
        

        /* dbQuery.collection('products').doc('27Vak1etNlFCuRXRILMU').get() //trae un solo item con el doc.('id')
        .then(resp => setProd( { id: resp.id, ...resp.data() } )) */
        //dbQuery.collection('products').where('categoria', '==', 'pasteleria').get() //trae por categoria en donde dice.where('categoria')


        if(categoryID === 'pasteleria'){
            dbQuery.collection('products').where('categoria', '==', 'pasteleria').get()
                .then(data => setProducts( data.docs.map(pro => ( { id: pro.id, ...pro.data() } ) )))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }else if(categoryID === 'tartas'){
            dbQuery.collection('products').where('categoria', '==', 'tartas').get()
                .then(data => setProducts( data.docs.map(pro => ( { id: pro.id, ...pro.data() } ) )))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }else if(categoryID === 'torta'){
            dbQuery.collection('products').where('categoria', '==', 'torta').get()
                .then(data => setProducts( data.docs.map(pro => ( { id: pro.id, ...pro.data() } ) )))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }else if(categoryID === 'desayuno'){
            dbQuery.collection('products').where('categoria', '==', 'desayuno').get()
                .then(data => setProducts( data.docs.map(pro => ( { id: pro.id, ...pro.data() } ) )))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }else if(categoryID === 'eventosEsp'){
            dbQuery.collection('products').where('categoria', '==', 'eventosEsp').get()
                .then(data => setProducts( data.docs.map(pro => ( { id: pro.id, ...pro.data() } ) )))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
        },[categoryID]);



        /* if (categoryID) {
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
        }},[categoryID]); */
        


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

