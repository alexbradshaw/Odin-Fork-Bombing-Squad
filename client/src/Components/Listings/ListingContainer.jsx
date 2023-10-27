import { useState } from 'react';

import Confirm from './Confirm';
import IconButton from './IconButton';

const ListingContainer = ({ items, setItemsArray, setError }) => {

    const ListItem = ({ item }) => {

        const [clicked, setClicked] = useState(false); // Render delete confirm prompt

        const click = () => {
            setClicked(!clicked);
        }

        const deleteHandler = async () => {
            const response = await fetch(`/api/item/${item._id}`, { method: "DELETE" }); // call api for current item

            if (!response.ok) {
                const error = await response.json()
                setError(error.message);
                return
            }

            const { items } = await response.json();
            
            setItemsArray(items);
        }

        return (
            <div className='listItem'>
                <div className='itemTitle'>
                    <a>{item.name}</a>
                    <h4 style={{"marginLeft":"6px"}}>x{item.quantity}</h4>
                </div>
                <div className='cost'>
                    <span style={{"color": "green"}}>
                        ${item.price}
                    </span>
                </div>
                <div className='delete'>
                    { clicked ? 
                    <Confirm check={deleteHandler} no={click}/>
                    :
                    <IconButton click={click} icon={"material-symbols:delete"}/>
                    }
                </div>
            </div>
        );
    }

    return (
        <div className='listingContainer'>
            {
                items.map((item, index) => {
                    return <ListItem id={item._id} item={item} key={"item " + index}/>;
                })
            }
        </div>
    );
}

export default ListingContainer;