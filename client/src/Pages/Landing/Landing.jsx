import './Landing.css'

import { useState, useEffect } from 'react';

import { getAllItems } from '../../utils/API';
import { formatDecimal } from '../../utils/Format';

const LandingItem = ({ item }) => {
    return (
        <div className='landingItem'>
            <a href={`/item/${item._id}`}>            
                <img src={item.image} alt={item.name} className='itemPicture'/>
            </a>
            <div className='itemName'>
                {item.name}
            </div>
            <div className='priceQuantity'>
                <div>
                    <span style={{"color":"green"}}>${formatDecimal(item.price)}</span>
                </div>
                <div>
                    x{item.quantity}
                </div>
            </div>
        </div>
    );
}

const Carousel = ({ items }) => {
    return (
        <div className='carousel'>
            { 
                items.map((item) => {
                    return <LandingItem item={item} key={item.name}/>
                })
            }
        </div>
    );
}

const Landing = () => {
    const [items, setItemsArray] = useState([]);

    const fetchItems = async () => {
        try {
            const items = await getAllItems();
            console.log(items);
            setItemsArray(items);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => fetchItems, []);

    return (
        <div className='landing'>
            <div className='landingHeader' style={{"color":"black"}}>
                hi
            </div>
            <div className='landingContainer'>
                <Carousel items={items}/>
                <Carousel items={items}/>
            </div>
        </div>
    );
};

export default Landing;