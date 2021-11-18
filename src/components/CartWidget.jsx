import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css";
import { Button, Table } from "reactstrap";
import { imageNotAvailable } from "./Item";

function CartWidget() {

  const { cartList, deleteCart, deleteCartItem } = useContext(CartContext);

  let totalPrice = 0;

  return (

      <div>
        <h1 className="shopCartTitle">Carrito de compras</h1>
        <br/>
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
                      <p key={prod.id}>
                        {prod.counter}
                      </p>
                  )
                }
              </th>

              <th scope="row">
              {cartList.map
                  (
                    prod => 
                      <p key={prod.id}>
                        $ {prod.price * prod.counter}
                      </p>
                  )
                }
              </th>

              <th scope="row">
                {cartList.map
                  (
                    (prod) => <p><Button onClick={() => deleteCartItem(prod.id)}>Borrar Item</Button></p>
                  )
                }
              </th>
              
            </tr>
          </tbody>
          <th><h4>Precio Total</h4></th>
          <td>
            {
              cartList.map((prod) => {totalPrice = totalPrice + (prod.price * prod.counter)  })
            }
            <h4>$ {totalPrice}</h4>
          </td>
          <Button onClick={deleteCart}>Borrar Carrito</Button>
        </Table>

      </div>
  );
}

export default CartWidget;
