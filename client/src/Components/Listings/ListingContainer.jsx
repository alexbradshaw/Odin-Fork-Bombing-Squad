import { useState } from 'react';

import { formatDecimal } from '../../utils/Format';

import Confirm from './Confirm';
import IconButton from './IconButton';
import { deleteItem } from '../../utils/API';

const ListingContainer = ({ items, setItemsArray, setError }) => {

    const ListItem = ({ item }) => {

        const [clicked, setClicked] = useState(false); // Render delete confirm prompt

        const click = () => {
            setClicked(!clicked);
        }

        const deleteHandler = async () => {
            try {
                const items = await deleteItem(item._id);
                setItemsArray(items);
            } catch (e) {
                setError(e.message);
            }

        }

        return (
            <div className='listItem'>
                <a href={`/item/${item._id}`}>
                    <img src={`${item.image}`} alt={`${item.name}`} className='listImage'/>
                </a>
                <div className='itemTitle'>
                    <h4>{item.name}</h4>
                </div>
                <div className='cost'>
                    <span style={{"color": "green"}}>
                        ${formatDecimal(item.price)}
                    </span>
                    <h4>x{item.quantity}</h4>
                </div>
                <div className='modify'>
                    <button>Edit</button>
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