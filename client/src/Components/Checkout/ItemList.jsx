import React, { useState } from 'react';

const ItemList = ({ itemArray }) => {

    // { itemArray, price, handle }

    // const totalPricing = (newPricing) => {
    //     handle(price + newPricing);
    // }

    return (
        <div id='item_grid'>
            <div className='grid_item'>
                {itemArray.name}
            </div>

            <div className='grid_item'>
                {itemArray.pricing}
            </div>

            <div className='grid_item'>
                x{itemArray.quantity}
            </div>
        </div>
    );
};   

export default ItemList;