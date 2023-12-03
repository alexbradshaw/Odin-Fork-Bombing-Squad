import './SellerInfo.css'
import { getUserByUsername } from '../../utils/API';
import { useEffect, useState } from 'react';

const SellerInfo = ({owner}) => { 
    const fetchUserData = async () => { 
        try {
            const { username, profilePic } = await getUserByUsername(owner);

            setSeller({username, profilePic})

        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => { fetchUserData() }, [owner]);

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