import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Card,
    CardImg,
    CardBody,
    CardText,
    Button,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

export const cardItem = {
    name: 'Lemon Pie',
    subtitle: 'Tarta rellana con curd de limon, cubierta con merengue italiano',
    detail: 'La tarta de limón es una tarta formada por una base de masa quebrada u hojaldre que se rellena con crema de limón. Esta tarta a menudo se complementa con un merengue, lo que resulta en tarta de limón con merengue.',
    price: '$1300,00',
    pictureSrc: "https://media.todojujuy.com/adjuntos/227/imagenes/000/215/0000215526.jpg"
}


const ItemDetail = ({item}) => {
    return (
      <Card>
        <CardImg
          alt=""
          src={item.pictureSrc}
          top 
          width="25px"
          height="50%"
        />
        <CardBody>
          <CardTitle tag="h5"><h2>{item.name}</h2></CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {item.subtitle}
          </CardSubtitle>
          <CardText>
            {item.detail}
            <br/>
            {item.price}
          </CardText>
          <Link to={`/categoria/${item.id}`}>
            <Button>Mostrar mas</Button>
          </Link>
        </CardBody>
      </Card>
    );
}

export default ItemDetail;