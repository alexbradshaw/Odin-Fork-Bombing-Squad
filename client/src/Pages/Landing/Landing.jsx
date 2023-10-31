import './Landing.css'

import { useState, useEffect } from 'react';

import { getAllItems } from '../../utils/API';

const LandingItem = ({ item }) => {
    return (
        <div className='landingItem'>
            <a href={`/item/${item._id}`}>            
                <img src={item.image} alt={item.name} className='itemPicture'/>
            </a>
            <div>
                {item.name}
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