import './SingleItem.css'

import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';

import { addToCart, getCart, getItem } from '../../utils/API';

import ItemDetails from '../../Components/SingleItem/ItemDetails';
import ItemImage from '../../Components/SingleItem/ItemImage';
import SellerInfo from '../../Components/SingleItem/SellerInfo';

const SingleItem = () => { 
    const [itemInfo, setInfo] = useState({
        _id: "",
        date_created: "",
        image: "",
        name: "",
        owner: "",
        price: 0,
        quantity: 0,
        description: "",
    });

    const [inCart, setInCart] = useState(false);

    const { itemId } = useParams();

    const functionCall = async () => {
        const item = await getItem(itemId);
        setInfo(item);

        if (localStorage.getItem('auth') != null) {
            const cart = await getCart();

            let inCart = false;
    
            for (let i = 0; i < cart.length; i++) {
                if (cart[i]._id == item._id) {
                    inCart = true;
                    break;
                }
            }
    
            if (inCart) {
                setInCart(true);
            }
        } 
    }

    useEffect(() => { functionCall() }, [])

    const addHandler = async () => {
        const addedItem = await addToCart(itemId);
        setInCart(addedItem);
    }

    return (
        <div className='singleitem'> 
            <div className='item-image-column'>
                <ItemImage itemURL = {itemInfo.image} /> 
            </div>
            <div className='everything-else-column'>
                <div className='item-details'> 
                    <ItemDetails itemInfo ={itemInfo} addHandler={addHandler} inCart={inCart}/> 
                </div>
                <div className='seller-info'> <SellerInfo owner={itemInfo.owner}/> </div>
            </div>
        </div>
    );
};

export default SingleItem;