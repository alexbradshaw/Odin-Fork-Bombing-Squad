import './ItemDetails.css'

const ItemDetails = () => { 


    // THIS SHIT IS STILL NOT WORKING 

    // CHECK ALL THE INVOLVED CSS FILES
    return ( 
        <div className='item-details-container'> 
            <div> 
                <h2 id='item-name'> Item Name </h2>
            </div>

            <div> 
                <h2 id='item-price'> Item Price  </h2> 
            </div>

            <div> 
                <h2 id='item-description'> Item Description </h2>
            </div>

            <div>
                <h2 id='additional-details'> Additional Details </h2> 
            </div>

          
        </div>
    ); 
}; 

export default ItemDetails; 