import React, { useEffect, useState } from 'react';
import { ButtonToggle, Card, CardBody, CardTitle, Fade, ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import '../App.css';
import CardContainer from './CardContainer';
import ItemList from './ItemList';
import { products } from './Products';
 

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
    
    const listItem = lista.map((item) => <ListGroupItem style={ itemListaStyle } key=''>{item}</ListGroupItem>);

    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts
            .then(res => {
                setProducts(res)
            })
            .finally(() => setLoading(false))
    },[]);

    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle className="title">{props.title}</CardTitle>
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
