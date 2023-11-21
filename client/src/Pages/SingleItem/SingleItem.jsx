import './SingleItem.css'
import defaultImage from '../../Images/default_image.png';
import SellerInfo from '../../Components/SingleItem/SellerInfo';
import { useState, useEffect } from 'react'; 

import { useParams } from 'react-router-dom';
import { getItem } from '../../utils/API';
import ItemDetails from '../../Components/SingleItem/ItemDetails';
import ItemImage from '../../Components/SingleItem/ItemImage';
const SingleItem = () => { 
    const [itemInfo, setInfo] = useState({
        _id: "",
        date_created: "",
        image: "",
        name: "",
        owner: "",
        price: 0,
        quantity: 0
    });

    const { itemId } = useParams();

    const functionCall = async () => {
        const item = await getItem(itemId);
        setInfo(item)
        console.log(item);
    }

    useEffect(() => {functionCall()}, [])
    return (
        <div className='singleitem'> 
            
            {/* <img src={defaultImage} alt="Default Image" className='default-image' /> */}
            <div className='item-image-column'>
                <ItemImage/> 
            </div>
            <div className='everything-else-column'>
                <ItemDetails/>
                {/* AddToCart goes here */}
                 <SellerInfo/>
            </div>

            
           
            
        </div>

  
    );
};

export default SingleItem;