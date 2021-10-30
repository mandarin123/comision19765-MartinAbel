import React from 'react';
import { 
    Row,
    Col,
    Card,
    CardTitle,
    CardText 
} from 'reactstrap';
import ItemCount from './ItemCount';

function CardContainer({ stock, product }) {

    const brownieDescription = `Es un bizcocho de chocolate pequeño, típico de la gastronomía de Estados Unidos. Se llama así por su color marrón oscuro, o brown en inglés. A veces se cubre con jarabe espeso de chocolate y puede llevar dentro trocitos de nueces, chocolate, butterscotch, mantequilla de maní.`

    return (
        <div>
           <Row>
                <Col sm="6">
                    <Card body>
                    <CardTitle tag="h3">{product}</CardTitle>
                    <CardText className="modals">{brownieDescription}</CardText>
                    <div className="modals">El stock es de: {stock}</div>
                        <div> 
                            <ItemCount stock={6} initial={0} product={'Brownie Alpino'} />
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CardContainer
