import './ItemDetails.css'

const ItemDetails = ({itemInfo}) => { 


    // THIS SHIT IS STILL NOT WORKING 

    // CHECK ALL THE INVOLVED CSS FILES
    return ( 
        <div className='item-details-container'> 
            <div> 
                <h2 id='item-name'> {itemInfo.name} </h2>
            </div>

            <div> 
                <h2 id='item-price'> {itemInfo.price}  </h2> 
            </div>

            <div> 
                <h2 id='item-description'> {itemInfo.description} </h2>
            </div>

            <div>
                <h2 id='additional-details'> Additional Details </h2> 
            </div>

          
        </div>
    ); 
}; 

export default ItemDetails; 