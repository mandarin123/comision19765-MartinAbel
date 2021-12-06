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
import ItemCount from './ItemCount';
import "../App.css";

const imageNotAvailable = "https://lh3.googleusercontent.com/lUbKz6nyIzbssdhZBhs8_9s-4w8UnkdQfRvV0jwcfWxxRBZThssSAc4lBN5D0A0EfuLQOZgAFda0wodAli_qXxfjqNw9gnfn-rGdFPUKSpD24yb5_SsvtPt0E2sfBCPFmI-P5fkn5Vc=w2400";

const mostrarPedirCotizacion = () => {
  swal({
    title: "Pedi tu cotización por Whatsapp",
    text: "Para poder hacer un presupuesto más preciso mejor escribinos",
    icon: "warning",
    button: "Cerrar"
  });
};

const ItemDetail = ({ item, addProducts, subtractProduct, onAdd, productAdded }) => {
    return (
      <Card className="itemDetailCard">
        <CardImg
          alt={item.imgDesc}
          src={
            (item.imgUrl === "") ? imageNotAvailable : item.imgUrl
          }
          top
        />
        <CardBody>
          <CardTitle tag="h2">{item.title}</CardTitle>
          <CardText>
            {item.desciption}
            <br/>
            $ {item.price}
          </CardText>
        </CardBody>
        <CardBody>
          {(item.price === "Precio a cotizar")
            ?
            <Button color="primary" onClick={() => mostrarPedirCotizacion()}>Pedi tu cotizacion</Button>
            :
            <ItemCount 
              stock={item.stock}
              product={item.title}
              addProducts={addProducts}
              subtractProduct={subtractProduct}
              onAdd={onAdd}
              productAdded={productAdded}
            />
          }
        </CardBody>
      </Card>
    );
}

export default ItemDetail;