import './SellerInfo.css'
import profilePic from '../../Images/profile_pic.jpg';
import { getLoggedInUser } from '../../utils/API';
import { useEffect, useState } from 'react';
const SellerInfo = () => { 
    const fetchUserData = async () => { // fetches user data for current logged in user
        try {
            const { username, profilePic } = await getLoggedInUser();

            setSeller({username, profilePic})
            
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => { fetchUserData() }, []);

    const [sellerInfo, setSeller] = useState({ 
        username: "", 
        profilePic: "",
    });

    return ( 
        <div className='seller-info-bar'>
            <h3 className='seller-info-heading'> Seller Info </h3>
            <img src={sellerInfo.profilePic} alt="Default profile picture" className="profile-picture"/>
            <h3 className='seller-name'> {sellerInfo.username} </h3>
        </div>
    );
}; 

export default SellerInfo; 