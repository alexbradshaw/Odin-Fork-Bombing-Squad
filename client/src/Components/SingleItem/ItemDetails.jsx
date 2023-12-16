import './ItemDetails.css'

import { formatDecimal } from '../../utils/Format';

import AddToCart from '../../Components/SingleItem/AddToCart';

const ItemDetails = ({ itemInfo, addHandler, inCart }) => { 

    return ( 
        <div className='item-details-container'> 
            <div> 
                <h2 id='item-name'> {itemInfo.name} </h2>
            </div>

            <div> 
                <h2 id='item-price'> ${formatDecimal(itemInfo.price)}  </h2> 
            </div>

            <div> 
                <p id='item-description'> {itemInfo.description} </p>
            </div>

            <div>
                <h5 id='additional-details'> Additional Details </h5> 
            </div>

            <div className='add-to-cart'> 
                {
                inCart ? 
                <button disabled={true} style={{"width":"200px"}}>In cart</button> 
                : 
                <AddToCart addHandler={addHandler}/> 
                }
            </div>

          
        </div>
    ); 
}; 

export default ItemDetails; 