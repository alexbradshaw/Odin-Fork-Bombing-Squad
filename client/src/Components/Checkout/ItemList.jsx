import React, { useState } from 'react';
import "../../utils/Format";
import { formatDecimal } from '../../utils/Format';

const ItemList = ({ itemArray }) => {

    // { itemArray, price, handle }

    // const totalPricing = (newPricing) => {
    //     handle(price + newPricing);
    // }

    return (
        <div id='item'>
            <div className='item_flex_box'>
                Name: {itemArray.name}
            </div>

            <div className='item_flex_box'>
                Price: ${formatDecimal(itemArray.price)}
            </div>

            <div className='item_flex_box'>
                Quantity: x{itemArray.quantity}
            </div>
        </div>
    );
};   

export default ItemList;