import React, { useState } from 'react';
import { Button } from 'reactstrap';

function ItemCount({stock, initial = 0, product}) {

    const [counter, setcounter] = useState(initial);
    
    const addProducts = () => {
        counter < stock ? setcounter(counter + 1) : alert('Stock insuficiente'); 
    };
    
    const subtractProduct = () => {
        counter === initial ? setcounter(counter) : setcounter(counter - 1)
    };

    const onAdd = () => {
        counter > initial ? alert(`Se agregaron ${counter} de ${product}`) : alert(`No se puede agregar ${counter} de ${product} al carrito`)
    };
    
    return (
      <div className="buttonContainer">
        <Button
          color="primary"
          className="buttonsAddRemove"
          onClick={addProducts}
          disabled={counter >= stock}
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
          disabled={counter === initial}
        >
          -
        </Button>
        <Button color="primary" onClick={onAdd}>
          Agregar producto
        </Button>
      </div>
    );
}

export default ItemCount
