import './ItemImage.css'

const ItemImage = ({itemURL}) => { 
    return ( 
        <img src={itemURL} alt="Item Image" className='default-image' />
    );
};

export default ItemImage;