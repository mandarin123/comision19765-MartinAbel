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
import { Link } from 'react-router-dom';


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
                <CardTitle tag="h5"><h3>{prod.title}</h3></CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {prod.price}
                </CardSubtitle>
                <CardText>
                    {prod.desciption}
                </CardText>
                <Link to={`/categoria/${prod.id}`}>
                    <Button>Mostrar detalle</Button>
                </Link>
            </CardBody>
        </Card>

    );
}

export default Item



