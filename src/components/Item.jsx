import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


const Item = ({prod}) => {

    return (
        <Card key={prod.id} style={{ width:"18rem", margin: "5px"}} body outline >
            <CardImg
                alt={prod.imgDesc}
                src={prod.imgUrl}
                top
            />
            <CardBody>
                <CardTitle tag="h5"><h3>{prod.title}</h3></CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {prod.price}
                </CardSubtitle>
                <Link to={`/detail/${prod.id}`}>
                    <Button>Mostrar detalle</Button>
                </Link>
            </CardBody>
        </Card>
    );
}

export default Item



