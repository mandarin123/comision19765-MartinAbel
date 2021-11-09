import React from 'react';
import { 
    Card,
    CardImg,
    CardBody,
    CardText,
    CardTitle,
} from 'reactstrap';



const ItemDetail = ({prod}) => {
    return (
      <Card>
        <CardImg
          alt={prod.imgDesc}
          src={prod.imgUrl}
          top 
          width="25px"
          height="50%"
        />
        <CardBody>
          <CardTitle tag="h5"><h2>{prod.title}</h2></CardTitle>
          <CardText>
            {prod.desciption}
            <br/>
            {prod.price}
          </CardText>
        </CardBody>
      </Card>
    );
}

export default ItemDetail;