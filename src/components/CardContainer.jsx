import React from 'react';
import ItemCount from './ItemCount';

function CardContainer() {

    return (
        <div>
            <ItemCount stock={6} initial={0} product={'Brownie Alpino'} />
        </div>
    )
}

export default CardContainer
