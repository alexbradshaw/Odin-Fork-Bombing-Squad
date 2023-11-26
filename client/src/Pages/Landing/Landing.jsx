import './Landing.css'

import { useState, useEffect } from 'react';

import { getAllItems } from '../../utils/API';

import Carousel from '../../Components/Landing/Carousel';
import LandingItem from '../../Components/Landing/LandingItem';

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

    useEffect(() => { fetchItems() }, []);

    return (
        <div className='landing'>
            <h1 className='landingHeader' style={{"color":"black"}}>
                Welcome to Savy!
            </h1>
            <div className='landingContainer'>
                <Carousel>
                    {
                        items.map((item) => {
                            if (item.categories.includes('tech')) {
                                return <LandingItem item={item} key={item.name}/>
                            }
                        })
                    }
                </Carousel>
                <Carousel>
                    {
                        items.map((item) => {
                            if (item.categories.includes('big')) {
                                return <LandingItem item={item} key={item.name}/>
                            }
                        })
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Landing;