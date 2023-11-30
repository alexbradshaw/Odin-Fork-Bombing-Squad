import './SellerInfo.css'
import profilePic from '../../Images/profile_pic.jpg';
const SellerInfo = (sellerImg) => { 
    return ( 
        <div className='seller-info-bar'>
            <h3 className='seller-info-heading'> Seller Info </h3>
            <img src={profilePic} alt="Default profile picture" class="profile-picture"/>
            <h3 className='seller-name'> Seller Name </h3>
        </div>
    );
}; 

export default SellerInfo; 