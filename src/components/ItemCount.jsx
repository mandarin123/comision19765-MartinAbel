import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const AddedToCart = () => {
  return (
      <Button color="primary" >
        <Link to="/cart" className="buttonIr">
          Ir al carrito
        </Link>
      </Button>
  )
};

function ItemCount({ stock, initial = 0, addProducts, subtractProduct, onAdd, product, counter, productAdded }) {

    return (
      <div className="buttonContainer">
        <Button
          color="primary"
          className="buttonsAddRemove"
          onClick={addProducts}
          disabled={counter >= stock || productAdded === 'true'}
        >
          +
        </Button>

        <div className="quantityCounter text-primary">
          <h3>{counter}</h3>
        </div>

        <Button
          color="primary"
          className="buttonsAddRemove"
          onClick={subtractProduct}
          disabled={counter === initial || productAdded === 'true'}
        >
          -
        </Button>
        {
          (productAdded === 'false') 
            ?
            <Button color="primary" onClick={() => onAdd()}>
              Agregar producto
            </Button>
            :
            <Button className="buttonIr" color="primary">
              <AddedToCart />
              {alert(`Se agregaron ${counter} de ${product}`)}
            </Button>
        }
      </div>
    );
}

export default ItemCount
