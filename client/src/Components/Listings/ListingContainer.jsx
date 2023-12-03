import { useState } from 'react';

import { formatDecimal } from '../../utils/Format';

import Confirm from './Confirm';
import IconButton from './IconButton';
import { updateItem, deleteItem } from '../../utils/API';

const ListingContainer = ({ items, setItemsArray }) => {

    const ListItem = ({ item }) => {

        const [itemInfo, setItemInfo] = useState(item); // Render delete confirm prompt

        const itemInfoHandler = (e) => {
            setItemInfo({
                ...itemInfo,
                [e.target.name]: e.target.value
            })
        }

        const [remove, setRemove] = useState(false); // Render delete confirm prompt

        const removeFlip = () => {
            setRemove(!remove);
        }

        const [edit, setEdit] = useState(false); // Render delete confirm prompt

        const editFlip = () => {
            setEdit(!edit);
        }


        const deleteHandler = async () => {
            try {
                const items = await deleteItem(item._id);
                setItemsArray(items);
            } catch (e) {
                console.log(e);
            }
        }

        const editHandler = async () => {
            try {
                const update = await updateItem(item._id, itemInfo);
                if (update) {
                    location.reload();
                }
            } catch (e) {
                console.log(e);
            }

        }

        return (
            <div className='listItem'>
                <a href={`/item/${item._id}`}>
                    <img src={`${item.image}`} alt={`${item.name}`} className='listImage'/>
                </a>
                {
                    edit ?
                    <div className='editContainer'>
                        <div className='headerEdit'>
                            <input name='name' type="text" value={itemInfo.name} onChange={itemInfoHandler}/>
                        </div>
                        <div className='bottomEdit'>
                            <input name='price' type="text" value={itemInfo.price} onChange={itemInfoHandler}/>
                            <input name='quantity' type="text" value={itemInfo.quantity} onChange={itemInfoHandler}/>
                        </div>
                    </div>
                :
                    <>
                        <div className='itemTitle'>
                            <h4>{item.name}</h4>
                        </div>
                        <div className='cost'>
                            <span style={{"color": "green"}}>
                                ${formatDecimal(item.price)}
                            </span>
                            <h4>x{item.quantity}</h4>
                        </div>
                    </> 
                }
                <div className='modify'>
                    { edit ? 
                    <Confirm check={editHandler} no={editFlip}/>
                    :
                    <button onClick={editFlip}>Edit</button>
                    }
                    { remove ? 
                    <Confirm check={deleteHandler} no={removeFlip}/>
                    :
                    <IconButton click={removeFlip} icon={"material-symbols:delete"}/>
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