import React, { useState } from 'react';
import {
    Card,
    CardText,
    CardTitle,
    Button,
    Row,
    Col,
} from 'reactstrap';

function ItemCount() {

    const [countBrownie, setCountBrownie] = useState(0)

    const [countCheesecake, setCountCheesecake] = useState(0)

    
    const sumaProducto = (contador, setContador, stock) => {
        if(contador >= stock){
            alert('stock insuficiente')
        }else{
            setContador(contador + 1)
        }
        return contador        
    };
    
    const restaProducto = (contador, setContador) => {
        if(contador === 0){
            setContador(contador)
        }else{
            setContador(contador -1)
        }
        return contador
    }

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
                                onClick={() => sumaProducto(countBrownie, setCountBrownie, 6)}
                                disabled={countBrownie === 6}
                            >+</Button>

                            <div className="quantityCounter text-primary"><h3>{countBrownie}</h3></div>
                            
                            <Button 
                                color="primary" 
                                className="buttonsAddRemove"
                                onClick={() => restaProducto(countBrownie, setCountBrownie)}
                                disabled={countBrownie === 0}
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
                                onClick={() => sumaProducto(countCheesecake, setCountCheesecake, 3)}
                                disabled={countCheesecake === 3}
                            >+</Button>

                            <div className="quantityCounter text-primary"><h3>{countCheesecake}</h3></div>
                            
                            <Button 
                                color="primary" 
                                className="buttonsAddRemove"
                                onClick={() => restaProducto(countCheesecake, setCountCheesecake)}
                                disabled={countCheesecake === 0}
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
