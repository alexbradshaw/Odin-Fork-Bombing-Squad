import './CheckoutPage.css'
import React, { useState, useEffect } from 'react';
import '../../utils/API.js';
import { getCart } from '../../utils/API.js';
import ItemList from '../../Components/Checkout/ItemList.jsx';
import PhotoList from '../../Components/Checkout/PhotoList.jsx';


const CheckoutPage = () => {
    // State for handling user input
    //const [itemArray, setItemArray] = useState([]);
    // Array that contains items and their important attributes such as imageURL
    //, their quantity, their price

    const[totalPrice, setTotalPrice] = useState(0.00);
    const [items, setItemsArray] = useState([]);

    const fetchItems = async () => {
        try {
            const items = await getCart();
            console.log(items);
            setItemsArray(items);
        } catch (e) {
            console.error(e);
        }
    };
    
    // Because it takes time for React to get all the items by calling getAllItems it has to be in an async function
    //After we want to store it in a state variable array

    useEffect(() => { fetchItems() }, []);
    // Because MongoDB is an external system and manages itself independently of React. useEffects allows React to
    // sync up with MONGODB. This will run every time the page rerenders
    
    const renderCartItems = () => {
      return items.map((item) => {
        return (
          <div className='icon_box'>
              <PhotoList itemArray={item} />
            {/* talk to team about there being no imgs in db */}
            <h6 className='item_name'>{item.name}</h6>
          </div>
        );
        // [<div>item1</div>, <div>item2</div>]
        // ^ gets returned on line 33 (html) and what jsx expects when returning a list of things
        // the outer return returns the resulting array of div tags that the inner return produces
      });
    }

    useEffect(() => {
      // Calculate total price when items change
      const newTotalPrice = items.reduce((prev, curr) => prev + curr.price, 0);
      setTotalPrice(newTotalPrice);
    }, [items]);

    const renderCartRight = () => {
      return items.map((item) => {
        // setTotalPrice(item.price + totalPrice);
        return (
          <div id='cart_row_box'>
            <ItemList itemArray={item}/>
          </div>
        )
      })
    }

    return (
      <div id='sell_item_page'> 
        <div className='header'>
            <h2>Checkout</h2>
        </div>  

        <div id='checkout_grid'>

{/* div contains the 4 item boxes with left positioning*/}
          <div id='photo_box_test'>
            {renderCartItems()}
          </div>

          <div id='yo'>
            <div id='item-box'>
              {renderCartRight()}
            </div>
            <div id='price_box'>
              <h6>Total Price: {totalPrice}</h6>
            </div>
          </div>

        </div>

        {/* Div contains the box with each of the product details form the array listed out in the description in the box
        Positioned to the right */}
    
          <div id='purchaseButton'>
            <div id='button_grid'>
                 <a href='/purchase'><button onClick={submitPurchase} className='bottom_btn'>Purchase</button></a>
            </div>
          </div>

      </div>
    );
  };
  
  export default CheckoutPage;