import React  from 'react';
import Item from './Item';

const ItemList = ({products}) => {
    return (
        <>
            { products.map(prod => <Item prod={prod} key={prod.id} />) }  
        </>
    )
}

export default ItemList
