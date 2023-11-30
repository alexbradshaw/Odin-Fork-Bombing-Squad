import './SingleItem.css'
import SellerInfo from '../../Components/SingleItem/SellerInfo';
import { useState, useEffect } from 'react'; 
// import seller
import { useParams } from 'react-router-dom';
import { getCart, getItem } from '../../utils/API';
import ItemDetails from '../../Components/SingleItem/ItemDetails';
import ItemImage from '../../Components/SingleItem/ItemImage';
import { addToCart } from './../../utils/API';


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

    useEffect(() => {functionCall()}, [])

    const addHandler = async () => {
        const addedItem = await addToCart(itemId);
        setInCart(addedItem);
    }

    return (
        <div className='singleitem'> 
            {/* <img src={defaultImage} alt="Default Image" className='default-image' /> */}
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