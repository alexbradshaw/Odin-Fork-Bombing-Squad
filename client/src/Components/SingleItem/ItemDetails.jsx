import { formatDecimal } from '../../utils/Format';
import './ItemDetails.css'

formatDecimal

const ItemDetails = ({itemInfo}) => { 


    // THIS SHIT IS STILL NOT WORKING 

    // CHECK ALL THE INVOLVED CSS FILES
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

            <button className='cart-button'> Add to Cart </button>

          
        </div>
    ); 
}; 

export default ItemDetails; 