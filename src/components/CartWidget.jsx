import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css";
import { Table } from "reactstrap";

function CartWidget() {

  const { cartList, addCartItem, deleteCart, deleteCartItem } = useContext(CartContext);

  console.log(cartList);

  return (

      <div>
        <h1 className="shopCartTitle">Carrito de compras</h1>
        <br/>
        {cartList.map(prod => <li key={prod.id}>Producto: {prod.title}</li>)}
      </div>

  );
}

export default CartWidget;
