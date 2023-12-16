import { formatDecimal } from '../../utils/Format';

import { Link } from 'react-router-dom';

const LandingItem = ({ item }) => {
    return (
        <div className='landingItem'>
            <Link to={`/item/${item._id}`}>            
                <img src={item.image} alt={item.name} className='itemPicture'/>
            </Link>
            <div className='itemName'>
                {item.name}
            </div>
            <div className='priceQuantity'>
                <div>
                    <span style={{"color":"green"}}>${formatDecimal(item.price)}</span>
                </div>
                <div>
                    x{item.quantity}
                </div>
            </div>
        </div>
    );
}

export default LandingItem;