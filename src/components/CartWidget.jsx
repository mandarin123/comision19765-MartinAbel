import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css";
import { Button, Table } from "reactstrap";
import { imageNotAvailable } from "./Item";
import { Link } from "react-router-dom";

function CartWidget() {

  const { cartList, deleteCart, deleteCartItem, counter, totalPrice, total } = useContext(CartContext);

  return (
      <div>
        <h1 className="shopCartTitle">Carrito de compras</h1>
        <br/>
        {console.log(cartList)}
        {
          cartList.length === 0
          ?
          <div>
            <h1 className="continuarCompra">Carrito vacio, continua con tu compra</h1>
            <Link to="/productos">
              <Button style={{ display: "block", margin: "auto", textDecoration: "none" }}>Continuar comprando</Button>
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
                      (prod) => <p><Button onClick={() => deleteCartItem(prod.id)}>Borrar Item</Button></p>
                    )
                  }
                </th>
                
              </tr>
            </tbody>
            <th><h4>Precio Total</h4></th>
            <td>
                <h4>
                  $ {total}
                </h4>
            </td>
            <Button onClick={deleteCart}>Borrar Carrito</Button>
          </Table>
      }
    </div>
      
  );
}

export default CartWidget;
