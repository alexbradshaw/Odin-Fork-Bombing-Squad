import { createNewItem } from "../../utils/API";

import Confirm from './Confirm';
import IconButton from "./IconButton";

const ListingHeader = ({ username }) => {

    return (
        <div className='listingHeader'>
            <div className='hello'>
                <h2>Hello {username}!</h2>  
            </div>
            <div className='listingButtons'>
                <button onClick={() => location.assign('/sellItem')}>
                    Sell Item
                </button>
            </div>
        </div>
      );
}

export default ListingHeader;