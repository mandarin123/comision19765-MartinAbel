import React, { useState } from 'react';
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

function ItemCount({stock, initial = 0, product}) {

    const [counter, setcounter] = useState(initial);
    const [productAdded, setProductAdded] = useState('false');
    
    const addProducts = () => {
        counter < stock ? setcounter(counter + 1) : alert('Stock insuficiente'); 
    };
    
    const subtractProduct = () => {
        counter === initial ? setcounter(counter) : setcounter(counter - 1)
    };

    const onAdd = () => {
        counter > initial ? setProductAdded('true')  : alert(`No se puede agregar ${counter} de ${product} al carrito`)
    };
        
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
            <Button color="primary" onClick={onAdd}>
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
