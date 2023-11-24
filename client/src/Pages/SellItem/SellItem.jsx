import './SellItem.css'
import uploadPhoto from '../../Components/SellItem/UploadPhoto.jsx';
import React, { useState } from 'react';


const SellItem = () => {
    // State for handling user input
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [model, setModel] = useState('');
    const [pricing, setPricing] = useState(0.00);
    const [address, setAddress] = useState('');
    const [imageURL, setImageURL] = useState('');
  
    // const submitLogin = (e) => {
    //   e.preventDefault(); // prevents page from refreshing
    //   login({ userOrEmail, password });
    // };

    const createItem = () => {
        return 
    }
  //This method needs to return a landing object that can be posted in the database.
  //Once I have created a new landing object I need to see if I need to call either createNewItem or UpdateItem 
  //so the database changes accordingly with the new Item
    return (
      <div id='sell_item_page'> 
        <div className='header'>
            <h2>Sell Item</h2>
        </div>  

          <div id='photo_box'>
            <div id='photo_grid'>
                <div id='grid_item_1'>
                    <div className='photo_title' id='title_1'>
                        <h3>Photo 1</h3>
                    </div>
                    <div className='photo'>
                        <div className='uploadButton'>
                            <button>Upload Image</button>
                            {/* add onSubmit property to call uploadImage method*/}
                        </div>
                    </div>
                </div>
                <div id='grid_item_2'>
                    <div className='photo_title' id='title_2'>
                        <h3>Photo 2</h3>
                    </div>
                    <div className='photo'>
                        <div className='uploadButton'>
                            <button>Upload Image</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div id='product_box'>
            <div id='product_grid'>
                {/* <div className='' */}
                <div className='product_text'>
                    <h6>Title:</h6>
                    <input type='text' onChange={(e) => setTitle(e.target.value)}></input>
                    {/* Every time the text field for Title changes then so does the state value*/}
                </div>
                <div className='product_text'>
                    <h6>Description:</h6>
                    <input type='text' onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <div className='product_text'>
                    <h6>Category:</h6>
                    <input type='text' onChange={(e) => setCategory(e.target.value)}></input>
                </div>
                <div className='product_text'>
                    <div>
                        <h6>Model:</h6>
                    </div>
                    <input type='text' onChange={(e) => setModel(e.target.value)}></input>
                </div>
                <div className='product_text'>
                    <h6>Pricing: </h6>
                    <input type='text' onChange={(e) => setPricing(e.target.value)}></input>
                </div>
                <div className='product_text'>
                    <h6>Address: </h6>
                    <input type='text' onChange={(e) => setAddress(e.target.value)}></input>
                </div>
            </div>
          </div>
          <div id='buttons'>
            <div id='button_grid'>
                <button className='bottom_btn'>Save</button>
                <button className='bottom_btn' onSubmit={createItem}>List</button>
                {/* When we click the list button then a landing item object should be created */}
            </div>
          </div>

      </div>
    );
  };
  
  export default SellItem;