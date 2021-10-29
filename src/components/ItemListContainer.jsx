import React, { useState } from 'react';
import { ButtonToggle, Card, CardBody, CardTitle, Fade, ListGroup, ListGroupItem } from 'reactstrap';
import '../App.css';
import ItemCount from './ItemCount';

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


function ItemListContainer(props) {

    
    
    const listItem = lista.map((item) => <ListGroupItem style={ itemListaStyle }>{item}</ListGroupItem>);

    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);

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
            <ItemCount initial={0} stock={6} producto={'Brownie Alpino'} />
        </>
    )
}

export default ItemListContainer
