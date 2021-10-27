import React, { useState } from 'react';
import {
    Card,
    CardText,
    CardTitle,
    Button,
    Row,
    Col,
    Alert,
    Badge,
  } from 'reactstrap';

function ItemCount() {

    const [countBrownie, setCountBrownie] = useState(0)

    const [countCheesecake, setCountCheesecake] = useState(0)


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
                                onClick={countBrownie === 6 ? alert('Stock insuficiente') : () => setCountBrownie(countBrownie +1)}
                            >+</Button>

                            <div className="quantityCounter text-primary"><h3>{countBrownie}</h3></div>
                            
                            <Button 
                                color="primary" 
                                className="buttonsAddRemove"
                                onClick={countBrownie === 0 ? () => setCountBrownie(countBrownie) :() => setCountBrownie(countBrownie - 1)}
                            >-</Button>
                            <Button 
                                color="primary"
                                onClick={() => alert(`Se agregaron ${countBrownie} de Brownies alpinos`)}
                            >Agregar al carrito</Button>
                        </div>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                    <CardTitle tag="h5">Cheesecake</CardTitle>
                    <CardText className="modals">Un pastel de queso o tarta de queso es un postre muy popular desde el siglo XX hecho a base de ricota, requesón, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche, patata, almendras o frutas.</CardText>
                    <div className="buttonContainer">
                            <Button 
                                color="primary" 
                                className="buttonsAddRemove"
                                onClick={countCheesecake === 3 ? alert('Stock insuficiente') : () => setCountCheesecake(countCheesecake +1)}
                            >+</Button>

                            <div className="quantityCounter text-primary"><h3>{countCheesecake}</h3></div>
                            
                            <Button 
                                color="primary" 
                                className="buttonsAddRemove"
                                onClick={countCheesecake === 0 ? () => setCountCheesecake(countCheesecake) :() => setCountCheesecake(countCheesecake - 1)}
                            >-</Button>
                            <Button 
                                color="primary"
                                onClick={() => alert(`Se agregaron ${countCheesecake} de Cheesecake`)}
                            >Agregar al carrito</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ItemCount
