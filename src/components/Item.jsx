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

const imageNotAvailable = "https://lh3.googleusercontent.com/lUbKz6nyIzbssdhZBhs8_9s-4w8UnkdQfRvV0jwcfWxxRBZThssSAc4lBN5D0A0EfuLQOZgAFda0wodAli_qXxfjqNw9gnfn-rGdFPUKSpD24yb5_SsvtPt0E2sfBCPFmI-P5fkn5Vc=w2400";

const Item = ({prod}) => {

    return (
        <Card key={prod.id} style={{ width:"18rem", margin: "5px"}} body outline >
            <CardImg
                alt={prod.imgDesc}
                src={
                    (prod.imgUrl === "") ? imageNotAvailable : prod.imgUrl
                  }
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



