import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
} from 'reactstrap';
import React from 'react';


const Item = ({prod}) => {

    return (

        <Card key={prod.id} className="text-center" body outline>
            <CardImg
                alt={prod.imgDesc}
                src={prod.imgUrl}
                top
                width="100%"
            />
            <CardBody>
                <CardTitle tag="h5">{prod.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {prod.price}
                </CardSubtitle>
                <CardText>
                    {prod.desciption}
                </CardText>
                <Button>Mostrar detalle</Button>
            </CardBody>
        </Card>

    );
}

export default Item



