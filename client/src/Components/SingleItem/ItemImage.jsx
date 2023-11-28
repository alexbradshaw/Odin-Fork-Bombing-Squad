import './ItemImage.css'

import defaultImage from '../../Images/default_image.png';
const ItemImage = ({itemURL}) => { 
    return ( 
        <img src={itemURL} alt="Item Image" className='default-image' />
    );
};

export default ItemImage;