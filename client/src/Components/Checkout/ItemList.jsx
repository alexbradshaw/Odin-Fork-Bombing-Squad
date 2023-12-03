import React, { useState } from 'react';
import "../../utils/Format";
import { formatDecimal } from '../../utils/Format';

import './ItemList.css'

const ItemList = ({ itemArray }) => {

    // { itemArray, price, handle }

    // const totalPricing = (newPricing) => {
    //     handle(price + newPricing);
    // }

    return (
        <div className='item'>
            <div className='item_flex_box'>
                Name: {itemArray.name}
            </div>

            <div className='item_flex_box'>
                Price: ${formatDecimal(itemArray.price)}
            </div>
        </div>
    );
};   

export default ItemList;