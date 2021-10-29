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

    const [contador, setContador] = useState(initial)
    
    const sumaProducto = () => {
        contador < stock ? setContador(contador + 1) : alert('stock insuficiente')
    };
    
    const restaProducto = () => {
        contador === initial ? setContador(contador) : setContador(contador - 1)
    };

    const onAdd = () => {
        contador > initial ? alert(`Se agregaron ${contador} de ${producto}`) : alert(`Debe sumar productos para agregar al carrito`)
    };
    
    return (
        <div>
            <Row>
                <Col sm="6">
                    <Card body>
                    <CardTitle tag="h5">Brownie alpino</CardTitle>
                    <CardText className="modals">Es un bizcocho de chocolate pequeño, típico de la gastronomía de Estados Unidos. Se llama así por su color marrón oscuro, o brown en inglés. A veces se cubre con jarabe espeso de chocolate y puede llevar dentro trocitos de nueces, chocolate, butterscotch, mantequilla de maní.</CardText>
                        <div className="buttonContainer">
                            <Button 
                                color="primary" 
                                className="buttonsAddRemove"
                                onClick={sumaProducto}
                                disabled={contador >= stock}
                            >+</Button>

                            <div className="quantityCounter text-primary"><h3>{contador}</h3></div>
                            
                            <Button 
                                color="primary" 
                                className="buttonsAddRemove"
                                onClick={restaProducto}
                                disabled={contador === initial}
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
