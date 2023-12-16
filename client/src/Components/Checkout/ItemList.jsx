import './ItemList.css'

import { formatDecimal } from '../../utils/Format';

const ItemList = ({ itemArray }) => {
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