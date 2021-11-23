import React from 'react';
import { 
    Card,
    CardImg,
    CardBody,
    CardText,
    CardTitle,
    Button
} from 'reactstrap'; 
import swal from '@sweetalert/with-react';
import "../App.css";
import ItemCount from './ItemCount';

const imageNotAvailable = "https://lh3.googleusercontent.com/lUbKz6nyIzbssdhZBhs8_9s-4w8UnkdQfRvV0jwcfWxxRBZThssSAc4lBN5D0A0EfuLQOZgAFda0wodAli_qXxfjqNw9gnfn-rGdFPUKSpD24yb5_SsvtPt0E2sfBCPFmI-P5fkn5Vc=w2400";

const mostrarPedirCotizacion = () => {
  swal({
    title: "Pedi tu cotización por Whatsapp",
    text: "Para poder hacer un presupuesto más preciso mejor escribinos",
    icon: "warning",
    button: "Cerrar"
  });
};


const ItemDetail = ({ prod, counter, addProducts, subtractProduct, onAdd, productAdded }) => {

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
            $ {prod.price}
          </CardText>
        </CardBody>
        <CardBody>
          {(prod.price === "Precio a cotizar")
            ?
            <Button color="primary" onClick={() => mostrarPedirCotizacion()}>Pedi tu cotizacion</Button>
            :
            <ItemCount 
              stock={prod.stock}
              product={prod.title}
              addProducts={addProducts}
              subtractProduct={subtractProduct}
              counter={counter}
              onAdd={onAdd}
              productAdded={productAdded}
            />
          }
        </CardBody>
      </Card>
    );
}

export default ItemDetail;