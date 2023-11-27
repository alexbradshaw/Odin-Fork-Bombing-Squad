import './ItemImage.css'
import defaultImage from '../../Images/default_image.png';
const ItemImage = () => { 
    return ( 
        <img src={defaultImage} alt="Default Image" className='default-image' />
    );
};

export default ItemImage;