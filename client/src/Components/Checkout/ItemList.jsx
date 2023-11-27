import React, { useState } from 'react';
const ItemList = ({ itemArray, price, handle }) => {

    const[itemName, setItemName] = useState('');
    const[itemQuantity, setItemQuantity] = useState(0);
    const[itemPrice, setItemPrice] = useState(0.00);

    const totalPricing = (newPricing) => {
        handle(price + newPricing);
    }

    return (
        <div id='item_grid'>
            {itemArray.map((item) => {
                    setItemName(item.name);
                    setItemPrice(item.pricing);
                    setItemQuantity(item.quantity);
                {totalPricing(item.pricing)}
            })}
        </div>
    );
};   

export default ItemList;