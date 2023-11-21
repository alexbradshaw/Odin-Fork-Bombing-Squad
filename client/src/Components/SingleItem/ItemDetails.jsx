import './ItemDetails.css'

const ItemDetails = () => { 

    return ( 
        <div className='item-details-container'> 
            <div id='item-name'> 
                <h2> Item Name </h2>
            </div>

            <div id='item-price'> 
                <h2> Item Price  </h2> 
            </div>

            <div id='item-description'> 
                <h2> Item Description </h2>
            </div>

            <div id='additional details'>
                <h2> Additional Details </h2> 
            </div>

          
        </div>
    ); 
}; 

export default ItemDetails; 