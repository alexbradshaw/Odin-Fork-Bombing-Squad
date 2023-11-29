import React, { useState } from 'react';

const ItemList = ({ itemArray }) => {

    // { itemArray, price, handle }

    // const totalPricing = (newPricing) => {
    //     handle(price + newPricing);
    // }

    return (
        <div id='item'>
            <div className='item_flex_box'>
                {itemArray.name}
            </div>

            <div className='item_flex_box'>
                {itemArray.price}
            </div>

            <div className='item_flex_box'>
                x{itemArray.quantity}
            </div>
        </div>
    );
};   

export default ItemList;