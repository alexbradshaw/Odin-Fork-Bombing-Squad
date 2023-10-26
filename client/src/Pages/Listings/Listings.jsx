import './Listings.css'
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

const Listings = () => {
    const [userData, setData] = useState({
        "username":"",
        "email":"",
        "items":[]
    })

    const [formData, setForm] = useState({
        name: "",
        price: 0,
        quantity: 1,
        image: ""
    });

    const [newItem, setNewItem] = useState(false);

    const fetchUserData = async () => {
        await fetch("/api/login", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: "alex", 
                password: "abradshaw"
            }),
        });

        const response = await fetch("/api/user");
        const userObj = await response.json();

        setData(userObj);
    }

    useEffect(() => fetchUserData, [])

    return (
        <div className='listings'>
            <ListingHeader name={userData.username} clicked={newItem} setClicked={setNewItem} formData={formData} setData={setData} setForm={setForm}/>
            {
                newItem ? 
                <NewItem formData={formData} setForm={setForm}/>
                :  
                <></>
            }
            <ListingContainer items={userData.items} setData={setData}/>
        </div>
    );
}

const IconButton = ({click, icon, style}) => {
    return (
        <button onClick={click} style={style}>
            <Icon icon={icon} />
        </button>
    );
}

const Confirm = ({check, no}) => {
    return (
        <div>
            <IconButton click={check} icon={"fluent:checkmark-12-filled"}/>
            <IconButton click={no} icon={"octicon:x-12"} style={{"marginLeft": "5px"}}/>
        </div>
    );
}

const ListingHeader = (props) => {

    const newItem = () => {
        props.setClicked(!props.clicked);
    }

    const submitHandler = async () => {
        const response = await fetch("/api/item", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(props.formData),
        });

        const newUser = await response.json();

        props.setData(newUser);
        props.setClicked(false);
        props.setForm({
            name: "",
            price: 0,
            quantity: 1,
            image: ""
        })
    }

    return (
        <div className='listingHeader'>
            <div className='hello'>
                <h2>Hello {props.name}!</h2>
            </div>
            <div className='listingButtons'>
                {
                    props.clicked ?
                    <Confirm check={submitHandler} no={newItem}/>
                    :
                    <IconButton click={newItem} icon={"memory:plus"}/>
                }
            </div>
        </div>
      );
}

const NewItem = ({formData, setForm}) => {

    const formHandler = (e) => {
        setForm({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='newItem'>
            <div className='newItemContainer'>
                <div className='newItemForm'>
                    <div className='input'>
                        <label htmlFor="title">Title: </label>
                        <input type="text" name='name' placeholder='Title' id='title' onChange={formHandler}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="price">Price: </label>
                        <input type="number" name='price' min={0} placeholder='0' id='price' onChange={formHandler}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="quantity">Quantity: </label>
                        <input type="number" name='quantity' min={0} placeholder='0' id='quantity' onChange={formHandler}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="image">Image: </label>
                        <input type="text" name='image' placeholder='Image URL' id='image' onChange={formHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ListingContainer = ({items, setData}) => {

    const ListItem = ({item}) => {

        const [clicked, setClicked] = useState(false);

        const click = () => {
            setClicked(!clicked);
        }

        const deleteHandler = async () => {
            const response = await fetch(`/api/item/${item._id}`, { method: "DELETE" });
            const deleted = await response.json();
            setData(deleted);
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

export default Listings;