import './Listings.css'

import { useState, useEffect, useContext } from 'react';

import ListingHeader from "../../Components/Listings/ListingHeader"
import NewItem from "../../Components/Listings/NewItem"
import ListingContainer from "../../Components/Listings/ListingContainer"
import { getLoggedInUser } from '../../utils/API';

const Listings = () => {

    const [items, setItemsArray] = useState([]); // Items array to render to ListingContainer

    const [newItem, setNewItem] = useState(false); // handles if the user clicks the newItem toggle

    const [error, setError] = useState("");

    const [formData, setForm] = useState({ // Update form state for newItem
        name: "",
        price: 0,
        quantity: 0,
        image: ""
    });

    const [username, setUsername] = useState();

    const fetchUserData = async () => { // fetches user data for current logged in user
        try {
            const { username, items } = await getLoggedInUser();

            setUsername(username);
            setItemsArray(items);
        } catch (e) {
            setError(e.message);
        }
    };

    useEffect(() => { fetchUserData() }, []);

    useEffect(() => {
        if (!newItem) {
            setForm({
                name: "",
                price: 0,
                quantity: 0,
                image: ""
            })
        }
    }, [newItem]);

    return (
        <div className='listings'>
            <ListingHeader username={username} formData={formData} clicked={newItem} func={{ setNewItem, setItemsArray, setError }} />
            {
                newItem ? 
                <NewItem formData={formData} setForm={setForm}/>
                :  
                <></>
            }
            <div style={{"width":"100%", "textAlign":"center", "color":"red"}}>
                {error}
            </div>
            <ListingContainer items={items} setItemsArray={setItemsArray} setError={setError}/>
        </div>
    );
};

export default Listings;