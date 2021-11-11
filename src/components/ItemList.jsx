import React  from 'react';
import Item from './Item';
import { CardGroup, Container, Row } from 'reactstrap';
import "../App.css";

const ItemList = ({products}) => {
    return (
        <Container fluid className="text-center">
            <CardGroup className="modals m-5 d-block"  >
                <Row>
                        { products.map(prod => <Item prod={prod} key={prod.id} />) }  
                </Row>
            </CardGroup>
        </Container>
    )
}

export default ItemList;
