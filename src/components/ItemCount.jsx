import React, { useState } from 'react';
import {
    Card,
    CardText,
    CardTitle,
    Button,
    Row,
    Col,
} from 'reactstrap';

function ItemCount({stock, initial, producto}) {

    const [counter, setcounter] = useState(initial);

    const brownieDescription = `Es un bizcocho de chocolate pequeño, típico de la gastronomía de Estados Unidos. Se llama así por su color marrón oscuro, o brown en inglés. A veces se cubre con jarabe espeso de chocolate y puede llevar dentro trocitos de nueces, chocolate, butterscotch, mantequilla de maní.`
    
    const addProducts = () => {
        counter <= stock ? setcounter(counter + 1) : alert('stock insuficiente'); 
    };
    
    const subtractProduct = () => {
        counter === initial ? setcounter(counter) : setcounter(counter - 1)
    };

    const onAdd = () => {
        counter > initial ? alert(`Se agregaron ${counter} de ${producto}`) : alert(`No se puede agregar ${counter} de ${producto} al carrito`)
    };
    
    return (
        <div>
            <Row>
                <Col sm="6">
                    <Card body>
                    <CardTitle tag="h3">Brownie alpino</CardTitle>
                    <CardText className="modals">{brownieDescription}</CardText>
                    <div className="modals">El stock es de: {stock}</div>
                        <div className="buttonContainer">
                            <Button 
                                color="primary" 
                                className="buttonsAddRemove"
                                onClick={addProducts}
                                disabled={counter >= stock}
                            >+</Button>

                            <div className="quantityCounter text-primary"><h3>{counter}</h3></div>
                            
                            
                            <Button 
                                color="primary" 
                                className="buttonsAddRemove"
                                onClick={subtractProduct}
                                disabled={counter === initial}
                            >-</Button>
                            <Button 
                                color="primary"
                                onClick={onAdd}
                            >Agregar producto</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ItemCount
