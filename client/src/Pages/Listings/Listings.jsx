import './Listings.css'

import { useState, useEffect } from 'react';

import ListingHeader from "../../Components/Listings/ListingHeader"
import ListingContainer from "../../Components/Listings/ListingContainer"
import { getLoggedInUser } from '../../utils/API';

const Listings = () => {

    const [items, setItemsArray] = useState([]); // Items array to render to ListingContainer

    const [username, setUsername] = useState();

    const fetchUserData = async () => { // fetches user data for current logged in user
        try {
            const { username, items } = await getLoggedInUser();

            setUsername(username);
            setItemsArray(items);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => { fetchUserData() }, []);

    return (
        <div className='listings'>
            <div>
                <ListingHeader username={username} />
                <ListingContainer items={items} setItemsArray={setItemsArray}/>
            </div>
        </div>
    );
};

export default Listings;