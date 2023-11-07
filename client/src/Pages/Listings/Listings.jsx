import './Listings.css'

import { useState, useEffect, useContext } from 'react';

import { loginTest } from '../../utils/API';

import ListingHeader from "../../Components/Listings/ListingHeader"
import NewItem from "../../Components/Listings/NewItem"
import ListingContainer from "../../Components/Listings/ListingContainer"

import { UserData } from '../../App';

const Listings = () => {
    const { setData } = useContext(UserData);

    const [items, setItemsArray] = useState([]); // Items array to render to ListingContainer

    const [newItem, setNewItem] = useState(false); // handles if the user clicks the newItem toggle

    const [error, setError] = useState("");

    const [formData, setForm] = useState({ // Update form state for newItem
        name: "",
        price: 0,
        quantity: 0,
        image: ""
    });

    const fetchUserData = async () => { // fetches user data for current logged in user
        try {
            await loginTest(); // just temporarily log in user

            const response = await fetch("/api/user"); // call user object when page loads
            const { _id, username, email, items } = await response.json();

            setData({ _id, username, email });
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
            <ListingHeader formData={formData} clicked={newItem} func={{ setNewItem, setItemsArray, setError }} />
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