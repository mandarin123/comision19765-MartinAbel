import React  from 'react';
import Item from './Item';
import { CardGroup, Container } from 'reactstrap';
import "../App.css";

const ItemList = ({products}) => {
    return (
            <Container fluid>
            <CardGroup className="modals" style={{width:"150rem"}}>
                        { products.map(prod => <Item prod={prod} key={prod.id}  />) }  
            </CardGroup>
            </Container>
    )
}

export default ItemList;
