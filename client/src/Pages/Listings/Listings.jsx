import './Listings.css'

import { useState, useEffect } from 'react';

import { loginTest } from '../../utils/Listings API Calls';

import ListingHeader from "../../Components/Listings/ListingHeader"
import NewItem from "../../Components/Listings/NewItem"
import ListingContainer from "../../Components/Listings/ListingContainer"

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

    const [userData, setData] = useState({
        "username":"",
        "email":""
    });

    const fetchUserData = async () => { // fetches user data for current logged in user
        try {
            await loginTest(); // just temporarily log in user

            const response = await fetch("/api/user"); // call user object when page loads
            const { username, email, items } = await response.json();

            setData({ username, email });
            setItemsArray(items);
        } catch (e) {
            setError(e.message);
        }
    };

    useEffect(() => fetchUserData, []);

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
            <ListingHeader name={userData.username} formData={formData} clicked={newItem} func={{ setNewItem, setItemsArray, setError }} />
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