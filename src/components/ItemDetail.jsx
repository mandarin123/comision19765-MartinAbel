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

const imageNotAvailable = "https://lh3.googleusercontent.com/lUbKz6nyIzbssdhZBhs8_9s-4w8UnkdQfRvV0jwcfWxxRBZThssSAc4lBN5D0A0EfuLQOZgAFda0wodAli_qXxfjqNw9gnfn-rGdFPUKSpD24yb5_SsvtPt0E2sfBCPFmI-P5fkn5Vc=w2400";


const ItemDetail = ({prod}) => {
    return (
      <Card className="itemDetailCard">
        <CardImg
          alt={prod.imgDesc}
          src={
            (prod.imgUrl === "") ? imageNotAvailable : prod.imgUrl
          }
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