import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Fade, ListGroup, ListGroupItem } from 'reactstrap';

const lista = ['Tortas', 'Desayunos', 'Eventos Especiales', 'Pasteleria'];

function ItemListContainer(props) {
    
    const listItem = lista.map((item) => <ListGroupItem>{item}</ListGroupItem>);

    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);

    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <Button color="primary" onClick={toggle}>Mostrar Lista</Button>
                    <Fade in={fadeIn} tag="h5" className="mt-3">
                        <ListGroup>
                            {listItem}
                        </ListGroup>
                    </Fade>
                </CardBody>
            </Card>
        </>
    )
}

export default ItemListContainer
