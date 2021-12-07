import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap";
import { imageNotAvailable } from "./Item";
import { Link } from "react-router-dom";
import { getFiresore } from "../service/getFirestone";
import firebase from "firebase/app";
import { FormGroup } from "@mui/material";
import "../App.css";

const CartWidget = () => {

  
  const { cartList, deleteCart, deleteCartItem, totalPrice } = useContext(CartContext);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [modalEndShop, setModalEndShop] = useState(false);
  const toggleModalEndShop = () => setModalEndShop(!modalEndShop);
  const [orderId, setOrderId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });


  
  const generateOrder = () => {
    const order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = formData;
    order.total = totalPrice();
    order.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const name = cartItem.title;
      const price = cartItem.price * cartItem.counter;
      const totalItem = cartItem.counter;

      return {id, name, price, totalItem};
    });

    const dbQuery = getFiresore();
    dbQuery.collection('orders').add(order)
      .then(idOrder => setOrderId(idOrder.id))
      .catch(err => console.log(err));
      toggleModal();

      console.log('idOrden', orderId);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const EndBuyingForm = () => {

    return (
      <Form
        onSubmit={generateOrder}
      >
        <FormGroup>
          <Label for="nombreyapellido">Nombre y Apellido</Label>
            <Input
              type="nombreYApellido"
              id="nombreYApellido"
              name="name"
              defaultValue={formData.name}
              onBlur={handleChange}
            >
            </Input>
        </FormGroup>

        <br />

        <FormGroup>
          <Input
            placeholder="Celular"
            type="text"
            name="phone"
            defaultValue={formData.phone}
            onBlur={handleChange}
          >
          </Input>
        </FormGroup>
        <br />
        <FormGroup>
          <Input
            placeholder="email@example.com"
            type="mail"
            name="email"
            defaultValue={formData.email}
            onBlur={handleChange}
          >
          </Input>
        </FormGroup>
      </Form>
    )
  };

  return (
      <div>
        <h1 className="shopCartTitle">Carrito de compras</h1>
        <br/>
        {
          cartList.length === 0
          ?
          <div>
            <h1 className="continuarCompra">Carrito vacio, continua con tu compra</h1>
            <Link to="/productos" className="buttonSeguirComprando">
              <Button color="primary">Continuar comprando</Button>
            </Link>
            <img
            src="https://lh3.googleusercontent.com/7y4i8GNrhsi-6nZQsJEkO3Gs7mOtLsIEBzSZpHLK6FLDAHQLsZMQHtpU5FLrrYAKcyokXzXBQ6fGWAbnpTuYIpp156I5NXaohHVw18SfH4tnFBVWMryzpLXpAPpfgzPUIM0pKCbt5CU=w2400"
            alt="Empy shopcart"
            className="empyShopCart"
            />
          </div>
          :
          <Table bordered className="cartTable">
            <thead>
              <tr>
                <th>Foto</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  {cartList.map
                    (
                      prod => 
                        <p><img
                          alt={prod.imgDesc}
                          src={(prod.imgUrl === "") ? imageNotAvailable : prod.imgUrl}
                          className="cartImg"
                        /></p>
                    )
                  }
                </th>
              

                <th scope="row">
                  {cartList.map
                    (
                      prod => 
                        <p key={prod.id}>
                          {prod.title}
                        </p>
                    )
                  }
                </th>

                <th scope="row">
                  {cartList.map
                    (
                      prod => 
                        <p>
                          {prod.counter}
                        </p>
                    )
                  }
                </th>

                <th scope="row">
                {cartList.map
                    (
                      prod => 
                        <p>
                          $ {prod.price * prod.counter}
                        </p>
                    )
                  }
                </th>

                <th scope="row">
                  {cartList.map
                    (
                      (prod) => <p><Button onClick={() => deleteCartItem(prod.id)} color="primary">Borrar Item</Button></p>
                    )
                  }
                </th>
                
              </tr>
            </tbody>
            <th><h4>Precio Total</h4></th>
            <td>
                <h4>
                  $ {totalPrice()}
                </h4>
            </td>
            <Button onClick={deleteCart} color="primary">Borrar Carrito</Button>
            <br />
            <Button
                  color="primary"
                  onClick={toggleModal}
                  className="navBarLinks"
                  style={{ textDecoration: "none" }}
                >
                  Finalizar compra
            </Button>
            
            <Modal isOpen={modal} toggle={toggleModal} className="modals">
              <ModalHeader>
                Envia tus datos para realizar el pedido
              </ModalHeader>
              <ModalBody>
                <EndBuyingForm />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => {generateOrder() ; toggleModalEndShop() }}>Enviar Pedido</Button>
              </ModalFooter>
            </Modal>

            <Modal isOpen={modalEndShop} toggle={toggleModalEndShop} className="modals">
              <ModalHeader>
                Datos de su pedido
              </ModalHeader>
              <ModalBody>
                {orderId.id}
               {/*  {cartList.id}
                {cartList.name}
                {cartList.price}
                {cartList.totalItem} */}
              </ModalBody>
              <ModalFooter>
                Nombre:{formData.name}
                <br/>
                Telefono:{formData.phone}
                <br/>
                Email: {formData.email}
              </ModalFooter>
            </Modal>
          </Table>
      }
    </div>
      
  );
}

export default CartWidget;
