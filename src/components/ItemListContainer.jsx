import React, { useEffect, useState } from 'react';
import { ButtonToggle, Card, CardBody, CardTitle, Fade, ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import '../App.css';
import CardContainer from './CardContainer';
import ItemList from './ItemList';
import { products } from './Products';
import { useParams } from 'react-router';
 

const lista = ['Tortas', 'Desayunos', 'Eventos Especiales', 'Pasteleria'];

const buttonStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",  
};

const listaStyle = {
    textAlign: "center",
};

const itemListaStyle = {
    width: "25%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto", 
    fontFamily: "montserrat",
};


const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
        res(products)
    }, 2000);
});

const spinnerStyle = {
    textAlign: "center",
}

function ItemListContainer(props) {    
    
    const listItem = lista.map((item) => <ListGroupItem style={ itemListaStyle }>{item}</ListGroupItem>);

    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);

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

    console.log(categoryID);

    return (
        <>
            <Card className="modals">
                <CardBody>
                    <CardTitle><h2 className="title">{props.title}</h2></CardTitle>
                    <ButtonToggle color="primary" onClick={toggle} style={ buttonStyle }>Mostrar lista de productos</ButtonToggle>
                    <Fade in={fadeIn} tag="h5" className="mt-3">
                        <ListGroup style={ listaStyle }>
                            {listItem}
                        </ListGroup>
                    </Fade>
                </CardBody>
            </Card>
            <CardContainer stock={6} product={'Brownie Alpino'} />
            {
                loading 
                ? 
                    <div style={spinnerStyle}><Spinner color="primary" size="">.</Spinner></div>
                : 
                    <ItemList products={products}/>
            }
            
        </>
    )
}

export default ItemListContainer
