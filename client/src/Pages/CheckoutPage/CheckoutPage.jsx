import './CheckoutPage.css'
import React, { useState } from 'react';
import { useState } from 'react';

const CheckoutPage = () => {
    // State for handling user input
    const [itemArray, setItemArray] = useState([]);
    // Array that contains items and their important attributes such as imageURL
    //, their quantity, their price
  
    return (
      <div id='sell_item_page'> 
        <div className='header'>
            <h2>Checkout</h2>
        </div>  

{/* div contains the 4 item boxes with left positioning*/}
          <div id='photo_box'>
            <div id='photo_grid'>
                <div id='grid_item_1'>
                    <div className='photo_title' id='title_1'>
                        <h3>Photo 1</h3>
                    </div>
                    <div className='photo'>
                        <div className='uploadButton'>
                            <h5>Upload Image</h5>
                        </div>
                    </div>
                </div>
                <div id='grid_item_2'>
                    <div className='photo_title' id='title_2'>
                        <h3>Photo 2</h3>
                    </div>
                    <div className='photo'>
                        <div className='uploadButton'>
                            <h5>Upload Image</h5>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        {/* Div contains the box with each of the product details form the array listed out in the description in the box
        Positioned to the right */}
          <div id='product_box'>
            <div id='product_grid'>
                {/* <div className='' */}
                <div className='product_text'>
                    <h6>Title:</h6>
                    <input type='text'></input>
                </div>
                <div className='product_text'>
                    <h6>Description:</h6>
                    <input type='text'></input>
                </div>
                <div className='product_text'>
                    <h6>Category:</h6>
                    <input type='text'></input>
                </div>
                <div className='product_text'>
                    <div>
                        <h6>Model:</h6>
                    </div>
                    <input type='text'></input>
                </div>
                <div className='product_text'>
                    <h6>Pricing: </h6>
                    <input type='text'></input>
                </div>
                <div className='product_text'>
                    <h6>Address: </h6>
                    <input type='text'></input>
                </div>
            </div>
          </div>
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