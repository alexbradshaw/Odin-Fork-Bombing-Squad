import './SingleItem.css'
import defaultImage from '../../Images/default_image.png';
import SellerInfo from '../../Components/SingleItem/SellerInfo';
import { useState, useEffect} from 'react'; 

const SingleItem = () => { 
    return (
        <div className='singleitem'> 
            
            <img src={defaultImage} alt="Default Image" className='default-image' />
            <SellerInfo/>
            
            <h2> 
                Item Title Here

            </h2>

        </div>

  
    );
};

export default SingleItem;