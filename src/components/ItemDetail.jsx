import React from 'react';
import { 
    Card,
    CardImg,
    CardBody,
    CardText,
    CardTitle,
} from 'reactstrap'; 
import "../App.css"
import ItemCount from './ItemCount';



const ItemDetail = ({prod}) => {
    return (
      <Card className="itemDetailCard">
        <CardImg
          alt={prod.imgDesc}
          src={prod.imgUrl}
          top 
        />
        <CardBody>
          <CardTitle tag="h2">{prod.title}</CardTitle>
          <CardText>
            {prod.desciption}
            <br/>
            {prod.price}
          </CardText>
        </CardBody>
        <CardBody>
          <ItemCount stock={prod.stock} product={prod.title} />
        </CardBody>
      </Card>
    );
}

export default ItemDetail;