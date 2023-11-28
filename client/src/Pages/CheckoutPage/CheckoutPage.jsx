import './CheckoutPage.css'
import React, { useState, useEffect } from 'react';
import '../../utils/API.js';
import { getAllItems } from '../../utils/API.js';
import ItemList from '../../Components/Checkout/ItemList.jsx';
import PhotoList from '../../Components/Checkout/photoList.jsx';


const CheckoutPage = () => {
    // State for handling user input
    //const [itemArray, setItemArray] = useState([]);
    // Array that contains items and their important attributes such as imageURL
    //, their quantity, their price

    const[totalPrice, setTotalPrice] = useState(0.00);
    const [items, setItemsArray] = useState([]);

    const fetchItems = async () => {
        try {
            const items = await getAllItems();
            console.log(items);
            setItemsArray(items);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => { fetchItems() }, []);
    // Because MongoDB is an external system and manages itself independently of React. useEffects allows React to
    // sync up with MONGODB. This will run every time the page rerenders
  
    return (
      <div id='sell_item_page'> 
        <div className='header'>
            <h2>Checkout</h2>
        </div>  

{/* div contains the 4 item boxes with left positioning*/}
          <div id='photo_box'>
            <div id='site-grid'>
                <div id='grid_item_1'>
                    {/* the set of images and delete buttons*/}
                    <div id='item-grid'>
                        {/* <div id='grid_item_1'>
                            <h6>left</h6>
                        </div>
                        <div id='grid_item_2'>
                            <h6>right</h6>
                        </div> */}
                        <h2>right</h2>
                          {items.map((item) => {
                                // {setTotalPrice(totalPrice + item)}
                                <PhotoList itemArray={item} key={item.name}/>
                          })}
                    </div>
                </div>
                <div id='grid_item_2'>
                    {/* the div containing the informations about the products and the aggregate total*/}
                    <div id='checkout-box'>
                          {items.map((item) => {
                                // {setTotalPrice(totalPrice + item)}
                                return <ItemList itemArray={item} key={item.name}/>
                          })}
                        {/* price = {totalPrice} handle = {setTotalPrice} */}
                    </div>
                    <div>
                      <h2>Total Price: {totalPrice}</h2>
                    </div>
                </div>
            </div>
          </div>

        {/* Div contains the box with each of the product details form the array listed out in the description in the box
        Positioned to the right */}
    
          <div id='buttons'>
            <div id='button_grid'>
                <button className='bottom_btn'>Save</button>
                <button className='bottom_btn'>List</button>
            </div>
          </div>

      </div>
    );
  };
  
  export default CheckoutPage;