import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css";
import { Button, Table } from "reactstrap";

function CartWidget() {

  const { cartList } = useContext(CartContext);


  return (

      <div>
        <h1 className="shopCartTitle">Carrito de compras</h1>
        <br/>
        <Table bordered>
          <thead>
            <tr>
              <th>id</th>
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
                      <p key={prod.id}>
                        {prod.id}
                      </p>
                )
              }
            </th>
            <td>
              {cartList.map
                (
                  prod => 
                    <p key={prod.id}>
                      {prod.title}
                    </p>
                )
              }
            </td>
            <td>
              {cartList.map
                (
                  prod => 
                    <p key={prod.id}>
                      {prod.counter}
                    </p>
                )
              }
            </td>
            <td>
            {cartList.map
                (
                  prod => 
                    <p key={prod.id}>
                      {prod.price}
                    </p>
                )
              }
            </td>
            <td>
              <Button close/>
            </td>
            </tr>
          </tbody>
            
        </Table>

      </div>
  );
}

export default CartWidget;
