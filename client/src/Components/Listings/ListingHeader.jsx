import { Link } from 'react-router-dom';

const ListingHeader = ({ username }) => {

    return (
        <div className='listingHeader'>
            <div className='hello'>
                <h2>Hello {username}!</h2>  
            </div>
            <div className='listingButtons'>
                <Link to="/sellItem">
                    <button>
                        Sell Item
                    </button>
                </Link>
            </div>
        </div>
      );
}

export default ListingHeader;