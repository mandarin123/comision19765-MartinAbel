import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css";

function CartWidget() {

  const { cartList, deleteCartItem } = useContext(CartContext);

  return (

      <div className="shopCartTitle">
        <h1>Carrito de compras</h1>
        
      </div>

  );
}

export default CartWidget;
