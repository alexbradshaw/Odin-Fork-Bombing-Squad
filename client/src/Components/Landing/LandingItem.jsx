import { formatDecimal } from '../../utils/Format';

const LandingItem = ({ item }) => {
    return (
        <div className='landingItem'>
            <a href={`/item/${item._id}`}>            
                <img src={item.image} alt={item.name} className='itemPicture'/>
            </a>
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