import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';
import "../App.css";
import { CartContext } from '../context/CartContext';


const AddedToCart = () => {
  return (
    <div>

      <Button color="primary" className="buttonIR"  >
        <Link to="/cart" className="buttonIr">
          Ir al carrito
        </Link>
      </Button>

      <Button color="primary" className="buttonIR">
        <Link to="/productos" className="buttonIr">
          Continuar comprando
        </Link>
      </Button>

    </div>
  )
};

function ItemCount({ stock, initial = 0, addProducts, subtractProduct, onAdd, productAdded }) {


  const { counter } = useContext(CartContext);

    return (
      <div>
        {productAdded ? (
            <AddedToCart />
        ) : (
          <ButtonGroup>
            <Button
              color="primary"
              className="buttonsAddRemove"
              onClick={subtractProduct}
              disabled={counter === initial || productAdded}
            >
              -
            </Button>

            <div className="quantityCounter text-primary">
              <h4 className="counter">{counter}</h4>
            </div>

            <Button
              color="primary"
              className="buttonsAddRemove"
              onClick={() => addProducts()}
              disabled={counter >= stock || productAdded}
            >
              +
            </Button>
            <Button color="primary" onClick={onAdd}>
              Agregar producto
            </Button>
          </ButtonGroup>
        )}
      </div>
    );
}

export default ItemCount
