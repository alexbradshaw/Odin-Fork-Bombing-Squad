import { createNewItem } from "../../utils/Listings API Calls";

import Confirm from './Confirm';
import IconButton from "./IconButton";

const ListingHeader = ({ clicked, name, formData, func }) => {

    const { setItemsArray, setNewItem, setForm } = func; // extract functions from func object

    const newItem = () => {
        setNewItem(!clicked);
    }

    const submitHandler = async () => {
        const items = await createNewItem(formData); // get items array

        setItemsArray(items); // set Items array

        setNewItem(false); // Close form
        setForm({ // Reset form values
            name: "",
            price: 0,
            quantity: 1,
            image: ""
        })
    }

    return (
        <div className='listingHeader'>
            <div className='hello'>
                <h2>Hello {name}!</h2>  
            </div>
            <div className='listingButtons'>
                {
                    clicked ? // Conditionally render + and submit buttons for form
                    <Confirm check={submitHandler} no={newItem}/>
                    :
                    <IconButton click={newItem} icon={"memory:plus"}/>
                }
            </div>
        </div>
      );
}

export default ListingHeader;