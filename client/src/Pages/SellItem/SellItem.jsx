import './SellItem.css'
import React, { useState } from 'react';


const SellItem = () => {
    // State for handling user input
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [model, setModel] = useState('');
    const [pricing, setPricing] = useState(0.00);
    const [address, setAddress] = useState('');
  
    // const submitLogin = (e) => {
    //   e.preventDefault(); // prevents page from refreshing
    //   login({ userOrEmail, password });
    // };
  
    return (
      <div id='sell_item_page'> 
        <div className='header'>
            <h2>Sell Item</h2>
        </div>  

          <div id='photo_box'>
            <div id='photo_grid'>
                <div id='grid_item_1'>
                    <div className='photo_title'>
                        <h3>Photo 1</h3>
                    </div>
                    <div className='photo'>
                        <h3>picture 1</h3>
                    </div>
                </div>
                <div id='grid_item_2'>
                    <div className='photo_title'>
                        <h3>Photo 2</h3>
                    </div>
                    <div className='photo'>
                        <h3>picture 2</h3>
                    </div>
                </div>
            </div>
          </div>

          <div id='product_box'>
            <div id='product_grid'>
                <div className='product_box'>
                    <input type='text'></input>
                </div>
                <div className='product_box'>
                    <input type='text'></input>
                </div>
                <div className='product_box'>
                    <input type='text'></input>
                </div>
                <div className='product_box'>
                    <input type='text'></input>
                </div>
                <div className='product_box'>
                    <input type='text'></input>
                </div>
                <div className='product_box'>
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
  
  export default SellItem;